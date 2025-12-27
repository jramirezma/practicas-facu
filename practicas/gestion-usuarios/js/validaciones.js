/* ===================================================
   validaciones.js
   Sistema de Autenticación Web - 100% Cliente
   Formato móvil: +591 seguido de exactamente 8 dígitos
   =================================================== */

// =============== CONSTANTES GLOBALES ===============
const REGEX_CORREO = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const REGEX_NOMBRE = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
const REGEX_MOVIL = /^\+591[0-9]{8}$/;
const REGEX_CONTRASENA = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

const ESTADO_ACTIVO = "ACTIVO";
const ESTADO_BLOQUEADO = "BLOQUEADO";
const LIMITE_INTENTOS = 3;

const MENSAJES = {
  camposVacios: "Complete todos los campos",
  correoInvalido: "Formato de correo electrónico inválido",
  nombreInvalido: "El nombre solo puede contener letras y espacios",
  movilInvalido: "El móvil debe ser +591 seguido de 8 dígitos (ej: +59171234567)",
  contrasenaInsegura: "La contraseña debe tener al menos 6 caracteres, mayúscula, minúscula, número y símbolo",
  correoDuplicado: "Este correo ya está registrado",
  credencialesIncorrectas: "Usuario o contraseña incorrectos",
  cuentaBloqueada: "Cuenta bloqueada por intentos fallidos. Recupere su contraseña",
  registroExitoso: "Registro exitoso. Redirigiendo al login...",
  bienvenida: (nombre) => `Bienvenido, ${nombre}`,
  contrasenaActualizada: "Contraseña actualizada correctamente"
};

// =============== MÓDULO DE VALIDACIÓN ===============
function validarCorreo(correo) {
  if (!correo || correo.trim() === "") return { valido: false, mensaje: MENSAJES.camposVacios };
  const limpio = correo.trim();
  return REGEX_CORREO.test(limpio)
    ? { valido: true, mensaje: "" }
    : { valido: false, mensaje: MENSAJES.correoInvalido };
}

function validarNombre(nombre) {
  if (!nombre || nombre.trim() === "") return { valido: false, mensaje: MENSAJES.camposVacios };
  const limpio = nombre.trim();
  if (limpio.length < 2) return { valido: false, mensaje: "El nombre es muy corto" };
  return REGEX_NOMBRE.test(limpio)
    ? { valido: true, mensaje: "" }
    : { valido: false, mensaje: MENSAJES.nombreInvalido };
}

function validarMovil(movil) {
  if (!movil || movil.trim() === "") return { valido: false, mensaje: MENSAJES.camposVacios };
  const limpio = movil.trim();
  return REGEX_MOVIL.test(limpio)
    ? { valido: true, mensaje: "" }
    : { valido: false, mensaje: MENSAJES.movilInvalido };
}

function validarContrasena(contrasena) {
  if (!contrasena) return { valido: false, mensaje: MENSAJES.camposVacios };
  return REGEX_CONTRASENA.test(contrasena)
    ? { valido: true, mensaje: "" }
    : { valido: false, mensaje: MENSAJES.contrasenaInsegura };
}

// =============== MÓDULO DE ALMACENAMIENTO ===============
function guardarUsuario(usuario) {
  try {
    const json = JSON.stringify(usuario);
    localStorage.setItem(usuario.correoElectronico, json);
    return { exito: true };
  } catch (e) {
    return { exito: false, error: e.name === "QuotaExceededError" ? "Almacenamiento lleno" : "Error al guardar" };
  }
}

function obtenerUsuario(correo) {
  try {
    const json = localStorage.getItem(correo);
    return json ? JSON.parse(json) : null;
  } catch (e) {
    console.error("Error al leer usuario:", e);
    return null;
  }
}

function actualizarUsuario(correo, usuarioActualizado) {
  usuarioActualizado.correoElectronico = correo;
  return guardarUsuario(usuarioActualizado);
}

function existeUsuario(correo) {
  return localStorage.getItem(correo) !== null;
}

// =============== MÓDULO DE GESTIÓN DE USUARIOS ===============
function registrarUsuario(datos) {
  const vNombre = validarNombre(datos.nombreCompleto);
  if (!vNombre.valido) return { exito: false, mensaje: vNombre.mensaje };

  const vCorreo = validarCorreo(datos.correoElectronico);
  if (!vCorreo.valido) return { exito: false, mensaje: vCorreo.mensaje };

  const vMovil = validarMovil(datos.numeroMovil);
  if (!vMovil.valido) return { exito: false, mensaje: vMovil.mensaje };

  const vPass = validarContrasena(datos.contrasena);
  if (!vPass.valido) return { exito: false, mensaje: vPass.mensaje };

  const correo = datos.correoElectronico.trim().toLowerCase();
  if (existeUsuario(correo)) return { exito: false, mensaje: MENSAJES.correoDuplicado };

  const nuevoUsuario = {
    correoElectronico: correo,
    nombreCompleto: datos.nombreCompleto.trim(),
    numeroMovil: datos.numeroMovil.trim(),
    contrasena: datos.contrasena,
    estadoCuenta: ESTADO_ACTIVO,
    intentosFallidos: 0,
    fechaRegistro: new Date().toISOString()
  };

  const resultado = guardarUsuario(nuevoUsuario);
  return resultado.exito
    ? { exito: true, mensaje: MENSAJES.registroExitoso }
    : { exito: false, mensaje: resultado.error };
}

function autenticarUsuario(correo, contrasena) {
  if (!correo || !contrasena) return { exito: false, mensaje: MENSAJES.camposVacios };

  const correoLimpio = correo.trim().toLowerCase();
  const usuario = obtenerUsuario(correoLimpio);

  if (!usuario) return { exito: false, mensaje: MENSAJES.credencialesIncorrectas };

  if (usuario.estadoCuenta === ESTADO_BLOQUEADO) {
    return { exito: false, mensaje: MENSAJES.cuentaBloqueada, bloqueado: true };
  }

  if (usuario.contrasena === contrasena) {
    usuario.intentosFallidos = 0;
    actualizarUsuario(correoLimpio, usuario);
    return {
      exito: true,
      mensaje: MENSAJES.bienvenida(usuario.nombreCompleto),
      usuario: usuario
    };
  } else {
    usuario.intentosFallidos += 1;
    if (usuario.intentosFallidos >= LIMITE_INTENTOS) {
      usuario.estadoCuenta = ESTADO_BLOQUEADO;
      return { exito: false, mensaje: MENSAJES.cuentaBloqueada, bloqueado: true };
    }
    actualizarUsuario(correoLimpio, usuario);
    return { exito: false, mensaje: MENSAJES.credencialesIncorrectas };
  }
}

function recuperarContrasena(correo, nuevaContrasena) {
  const vPass = validarContrasena(nuevaContrasena);
  if (!vPass.valido) return { exito: false, mensaje: vPass.mensaje };

  const correoLimpio = correo.trim().toLowerCase();
  const usuario = obtenerUsuario(correoLimpio);

  if (!usuario) return { exito: false, mensaje: "Usuario no encontrado" };

  usuario.contrasena = nuevaContrasena;
  usuario.estadoCuenta = ESTADO_ACTIVO;
  usuario.intentosFallidos = 0;

  const resultado = actualizarUsuario(correoLimpio, usuario);
  return resultado.exito
    ? { exito: true, mensaje: MENSAJES.contrasenaActualizada }
    : { exito: false, mensaje: "Error al actualizar" };
}

// =============== MÓDULO DE INTERFAZ ===============
function mostrarMensaje(mensaje, tipo, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;

  contenedor.textContent = mensaje;
  contenedor.className = "mensaje";
  contenedor.classList.add(
    tipo === "error" ? "mensaje-error" :
    tipo === "exito" ? "mensaje-exito" : "mensaje-advertencia"
  );
  contenedor.style.display = "block";

  if (tipo === "exito") {
    setTimeout(() => contenedor.style.display = "none", 5000);
  }
}

function togglePasswordVisibility(inputId, botonId) {
  const input = document.getElementById(inputId);
  const boton = document.getElementById(botonId);
  if (!input || !boton) return;

  if (input.type === "password") {
    input.type = "text";
    boton.textContent = "Ojo cerrado";
    boton.setAttribute("aria-label", "Ocultar contraseña");
  } else {
    input.type = "password";
    boton.textContent = "Ojo";
    boton.setAttribute("aria-label", "Mostrar contraseña");
  }
}

function redirigir(url, delay = 0) {
  setTimeout(() => window.location.href = url, delay);
}

// =============== INICIALIZACIÓN DE FORMULARIOS ===============
function inicializarFormularioRegistro() {
  const form = document.getElementById("formularioRegistro");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("mensajeRegistro").style.display = "none";

    const datos = {
      nombreCompleto: document.getElementById("nombre").value,
      correoElectronico: document.getElementById("correo").value,
      numeroMovil: document.getElementById("movil").value,
      contrasena: document.getElementById("contrasena").value
    };

    const resultado = registrarUsuario(datos);

    mostrarMensaje(resultado.mensaje, resultado.exito ? "exito" : "error", "mensajeRegistro");

    if (resultado.exito) {
      form.reset();
      redirigir("login.html", 2000);
    }
  });

  const btn = document.getElementById("mostrarContrasena");
  if (btn) {
    btn.addEventListener("click", () => togglePasswordVisibility("contrasena", "mostrarContrasena"));
  }
}

function inicializarFormularioLogin() {
  const form = document.getElementById("formularioLogin");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("mensajeLogin").style.display = "none";

    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    const resultado = autenticarUsuario(correo, contrasena);

    if (resultado.exito) {
      mostrarMensaje(resultado.mensaje, "exito", "mensajeLogin");
      sessionStorage.setItem("usuarioActual", JSON.stringify(resultado.usuario));
      redirigir("dashboard.html", 1500);
    } else {
      mostrarMensaje(resultado.mensaje, resultado.bloqueado ? "advertencia" : "error", "mensajeLogin");
      if (resultado.bloqueado) {
        const enlace = document.getElementById("enlaceRecuperacion");
        if (enlace) {
          enlace.style.fontWeight = "bold";
          enlace.style.color = "#dc3545";
          enlace.querySelector("a").href = `recuperacion.html?correo=${encodeURIComponent(correo)}`;
        }
      }
    }
  });

  const btn = document.getElementById("mostrarContrasena");
  if (btn) {
    btn.addEventListener("click", () => togglePasswordVisibility("contrasena", "mostrarContrasena"));
  }
}

function inicializarFormularioRecuperacion() {
  const form = document.getElementById("formularioRecuperacion");
  if (!form) return;

  // Detectar correo desde URL
  const params = new URLSearchParams(window.location.search);
  const correoDesdeUrl = params.get("correo");
  const campoCorreo = document.getElementById("campoCorreo");
  const infoCorreo = document.getElementById("infoCorreo");

  let correoFinal = "";

  if (correoDesdeUrl) {
    correoFinal = decodeURIComponent(correoDesdeUrl).trim().toLowerCase();
    infoCorreo.textContent = `Restaurando contraseña para: ${correoFinal}`;
    campoCorreo.style.display = "none";
  } else {
    campoCorreo.style.display = "block";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("mensajeRecuperacion").style.display = "none";

    if (!correoDesdeUrl) {
      correoFinal = document.getElementById("correo").value.trim().toLowerCase();
    }

    const nuevaContrasena = document.getElementById("nuevaContrasena").value;

    const resultado = recuperarContrasena(correoFinal, nuevaContrasena);

    mostrarMensaje(resultado.mensaje, resultado.exito ? "exito" : "error", "mensajeRecuperacion");

    if (resultado.exito) {
      form.reset();
      redirigir("login.html", 3000);
    }
  });

  const btn = document.getElementById("mostrarContrasena");
  if (btn) {
    btn.addEventListener("click", () => togglePasswordVisibility("nuevaContrasena", "mostrarContrasena"));
  }
}

// =============== INICIO AUTOMÁTICO ===============
document.addEventListener("DOMContentLoaded", function () {
  inicializarFormularioRegistro();
  inicializarFormularioLogin();
  inicializarFormularioRecuperacion();
});

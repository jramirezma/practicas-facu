// Mostrar/ocultar ejercicios según el menú
function mostrarEjercicio(id) {
    document.getElementById('brillo').style.display = 'none';
    document.getElementById('distancias').style.display = 'none';
    document.getElementById('crateres').style.display = 'none';
    document.getElementById('cuerpo').style.display = 'none';
    document.getElementById('luz').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

// Botón Brillo Estelar
document.getElementById('btnBrillo').onclick = function() {
    var m = document.getElementById('mag').value;
    var r = '';
    if (m < 0) r = 'Extremadamente brillante';
    else if (m >= 0 && m < 1) r = 'Muy brillante';
    else if (m >= 1 && m < 3) r = 'Brillante';
    else if (m >= 3 && m < 6) r = 'Débil';
    else r = 'No visible';
    document.getElementById('outBrillo').innerText = r;
};

// Botón Distancias Planetas
document.getElementById('btnDistancias').onclick = function() {
    var n = Number(document.getElementById('numPlanetas').value);
    var total = 0;
    var info = '';
    for (var i = 1; i <= n; i++) {
        var d = Number(prompt('Distancia del planeta ' + i + ' en millones de km'));
        total += d;
        info += 'Planeta ' + i + ': ' + d + ' millones km\n';
    }
    var promedio = total / n;
    document.getElementById('outDistancias').innerText = info + 'Promedio: ' + promedio.toFixed(2) + ' millones km';
};

// Botón Cráteres Lunares
document.getElementById('btnCrateres').onclick = function() {
    var count = 0;
    var dia;
    var info = '';
    while (true) {
        dia = Number(prompt('Diámetro del cráter (0 para terminar)'));
        if (dia == 0) break;
        if (dia > 50) count++;
        info += 'Cráter: ' + dia + ' km\n';
    }
    document.getElementById('outCrateres').innerText = info + 'Cráteres >50 km: ' + count;
};

// Botón Cuerpo Celeste
document.getElementById('btnCuerpo').onclick = function() {
    var c = Number(document.getElementById('codigo').value);
    var res = '';
    switch (c) {
        case 1: res = 'Estrella'; break;
        case 2: res = 'Planeta'; break;
        case 3: res = 'Cometa'; break;
        case 4: res = 'Asteroide'; break;
        case 5: res = 'Galaxia'; break;
        default: res = 'Código inválido';
    }
    document.getElementById('outCuerpo').innerText = res;
};

// Botón Niveles de Luz
document.getElementById('btnLuz').onclick = function() {
    var val;
    var info = '';
    do {
        val = prompt('Ingrese nivel de luz (escriba "no" para terminar)');
        if (val.toLowerCase() != 'no') {
            if (Number(val) < 5) info += val + ' lux: Noche profunda\n';
            else info += val + ' lux\n';
        }
    } while (val.toLowerCase() != 'no');
    document.getElementById('outLuz').innerText = info;
};


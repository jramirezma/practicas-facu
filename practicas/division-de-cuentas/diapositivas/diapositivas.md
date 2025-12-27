# 📌 **Estructura de las 6 diapositivas (detalle finito para poder codificarlas)**

---

## **🟦 DIAPO 1 — Título + contexto inicial**

**Objetivo:** presentar el tema rápido sin aburrir.

**Contenido que debe aparecer:**

* Título grande: *“División automatizada de gastos en Python”*
* Subtítulo: *Proyecto de Programación I*
* Un micro resumen (una oración corta):
  *“Una herramienta que calcula consumos, propina proporcional y totales por persona de forma simple y precisa.”*
* Abajo, discreto: autores / curso / año.

**Animaciones recomendadas:**

* Fade-in secuencial para título → subtítulo → texto → créditos.
  Con anime.js podés usar delays tipo 200–300 ms.

**Diseño:**

* Fondo limpio, colores suaves.
* Título centrado y grande.
* Nada de texto largo… 

---

## **🟦 DIAPO 2 — Problema + motivación**

**Objetivo:** explicar por qué existe este proyecto.

**Contenido obligado (resumen del informe):**

* Pregunta disparadora:
  *“¿Cómo dividir gastos de forma justa cuando cada uno consume distinto?”*
* Lista simple (bullets) con los dolores principales:

  * consumos distintos entre personas
  * propina proporcional complicada
  * cálculos manuales con errores
  * pérdida de tiempo
  * discusiones incómodas
* Una frase final breve:
  *“Hace falta una herramienta precisa, rápida y clara.”*

**Animaciones:**

* Stagger de cada bullet, entrando desde la izquierda tipo slide-in suave.

**Diseño:**

* Layout dividido: a la izquierda la pregunta, a la derecha la lista.

---

## **🟦 DIAPO 3 — Objetivos del proyecto**

**Objetivo:** mostrar qué busca lograr el programa.

**Contenido:**

* Título centrado: *“Objetivos”*
* Dos bloques:

  * **General:**
    *Automatizar el cálculo equitativo de gastos usando Python y programación modular.*
  * **Específicos:** (3 a 5 bullets compactos)

    * Capturar datos de cada participante
    * Calcular subtotales y propina proporcional
    * Mostrar reportes claros por persona
    * Mantener el código modular y entendible
    * Validar con casos reales

**Animaciones:**

* Aparece el bloque “General” → luego el bloque “Específicos” en un slide-up suave.

**Diseño:**

* Fondo neutral, bloques con bordes suaves, estética prolija.

---

## **🟦 DIAPO 4 — Marco teórico (mini-resumen visual)**

**Objetivo:** explicar los conceptos base sin meter parrafones.

**Contenido dividido en 4 tarjetas (estilo “cards”):**

1. **Programación estructurada**
   secuencia, selección, iteración
2. **Modularidad y funciones**
   dividir tareas → código mantenible
3. **Estructuras de datos en Python**
   listas + diccionarios
4. **Algoritmo proporcional**
   "propina_individual = propina_total × (consumo_persona ÷ consumo_total)"

Todo en frases cortitas. Nada de párrafos.

**Animaciones:**

* Cards entrando en un stagger tipo grid, cada una con scale-in leve.

**Diseño:**

* Cuatro rectangulitos con íconos simples (opcionales).
* Evitá saturar — tiene que verse modernito.

---

## **🟦 DIAPO 5 — Arquitectura + módulos del programa**

**Objetivo:** mostrar cómo funciona el sistema internamente.

**Contenido:**

* Un esquema con tres columnas o pasos:

  1. **Interfaz y captura**

     * menú
     * ingreso de personas
     * consumos individuales
  2. **Cálculos**

     * total general
     * propina total
     * distribución proporcional
     * total final por persona
  3. **Presentación**

     * ticket detallado
     * quién paga cuánto

* Debajo, una línea que represente el **flujo**:
  **Entrada → Proceso → Salida**

**Animaciones:**

* Las columnas aparecen una por una desde derecha a izquierda.
* La línea de flujo puede tener un stroke animation con anime.js.

**Diseño:**

* Todo muy visual, casi infográfico.
* Nada de código, solo estructura.

---

## **🟦 DIAPO 6 — Resultados, pruebas y cierre**

**Objetivo:** cerrar con claridad y dejar la sensación de un proyecto sólido.

**Contenido:**

* Mini-sección “Casos de prueba” con 3 bullets:

  * 3 personas, propina 15% → resultados correctos
  * 2 personas iguales → propina equitativa
  * 4 consumos muy distintos → precisión proporcional
* Conclusiones:

  * solución práctica
  * cálculos precisos
  * código modular
  * fácil de mantener
* Posibles mejoras:

  * guardar historial
  * exportar PDF
  * interfaz gráfica

**Animaciones:**

* Fade-in global y luego un bounce muy leve para los subtítulos.

**Diseño:**

* Última slide más libre, pero simple. Nada cargado.

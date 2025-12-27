# UNIVERSIDAD MAYOR DE SAN ANDRÉS
## FACULTAD DE CIENCIAS PURAS Y NATURALES
## CARRERA DE INFORMÁTICA

---

# INFORME

# SISTEMA DE DIVISIÓN DE CUENTAS ENTRE AMIGOS

**INTEGRANTES:** 
- Univ. [Apellido1] [Nombre1] [Apellido2]
- Univ. [Apellido1] [Nombre1] [Apellido2]
- Univ. [Apellido1] [Nombre1] [Apellido2]

**ASIGNATURA:** PROGRAMACIÓN I

**SIGLA Y PARALELO:** INF 111 – "C"

**FECHA:** 20 de Noviembre de 2025

**LA PAZ - BOLIVIA**

---

# ÍNDICE DEL CONTENIDO

1. INTRODUCCIÓN .......................................................... 1
2. PLANTEAMIENTO DEL PROBLEMA ..................................... 2
3. OBJETIVOS ............................................................. 3
   3.1. OBJETIVO GENERAL ............................................... 3
   3.2. OBJETIVOS ESPECÍFICOS .......................................... 3
4. MARCO TEÓRICO CONCEPTUAL-CONTEXTUAL ........................ 4
5. MÉTODOS, TÉCNICAS Y HERRAMIENTAS ............................. 6
6. MARCO APLICATIVO ................................................... 7
7. CONCLUSIÓN ........................................................... 9
BIBLIOGRAFÍA ........................................................... 10
ANEXOS .................................................................. 11

---

# ÍNDICE DE GRÁFICOS, CUADROS, IMÁGENES

Figura 1. Diagrama de flujo del sistema ................................ 7
Figura 2. Interfaz de captura de datos .................................. 8
Tabla 1. Distribución de funciones por integrante ....................... 6

---

# ÍNDICE DE ANEXOS

ANEXO N° 1. Árbol de problemas y objetivos
ANEXO N° 2. Código fuente completo del sistema
ANEXO N° 3. Manual de usuario

---

# 1. INTRODUCCIÓN

En la actualidad, la gestión de gastos compartidos entre grupos de personas representa un desafío común en la vida cotidiana. Cuando un grupo de amigos, compañeros de trabajo o familiares comparten una comida en un restaurante, surge la necesidad de dividir la cuenta de manera equitativa y transparente. Este proceso, aparentemente simple, se complica cuando cada persona ha consumido diferentes productos y es necesario calcular tanto los subtotales individuales como la distribución proporcional de la propina.

El presente trabajo tiene como finalidad desarrollar un sistema automatizado de división de cuentas mediante un programa en lenguaje Python. Este sistema permitirá registrar los consumos individuales de cada persona, calcular automáticamente los montos correspondientes incluyendo la propina proporcional, y presentar los resultados de manera clara y organizada.

La metodología empleada se basa en el paradigma de programación estructurada, dividiendo el sistema en tres módulos principales: captura de datos, procesamiento de cálculos y presentación de resultados. Esta estructura modular facilita el desarrollo colaborativo entre los tres integrantes del equipo y garantiza un código mantenible y escalable.

El desarrollo de este sistema contribuye a la aplicación práctica de los conocimientos adquiridos en la asignatura de Programación I, demostrando cómo la programación puede resolver problemas cotidianos de manera eficiente y automatizada.

---

# 2. PLANTEAMIENTO DEL PROBLEMA

En situaciones de convivencia social, especialmente cuando grupos de personas comparten gastos en restaurantes o eventos, surge la problemática de calcular de manera precisa y justa la cantidad que cada persona debe aportar. Esta situación se agrava cuando:

Los consumos individuales son diferentes entre los participantes, lo que requiere un cálculo detallado por persona.

La propina debe distribuirse de manera proporcional al consumo de cada individuo, no de forma equitativa, generando confusión sobre el monto exacto que cada uno debe pagar.

Los cálculos manuales son propensos a errores aritméticos, especialmente cuando el grupo es numeroso o los montos son variados.

El tiempo invertido en realizar estas operaciones manualmente resta tiempo de convivencia y puede generar incomodidad entre los participantes.

La falta de un registro claro y detallado de los consumos puede derivar en malentendidos o desacuerdos sobre los montos a pagar.

Esta problemática se presenta con frecuencia en la vida universitaria, donde grupos de estudiantes comparten gastos y requieren métodos ágiles y confiables para dividir cuentas. La ausencia de una herramienta automatizada genera pérdida de tiempo, posibles errores de cálculo y situaciones incómodas que pueden afectar las relaciones interpersonales del grupo.

---

# 3. OBJETIVOS

## 3.1. OBJETIVO GENERAL

Desarrollar un sistema automatizado de división de cuentas mediante un programa ejecutable en lenguaje Python, utilizando estructuras de datos y funciones modulares, para facilitar el cálculo preciso y equitativo de gastos compartidos entre grupos de personas, optimizando el tiempo de cálculo y minimizando errores aritméticos.

## 3.2. OBJETIVOS ESPECÍFICOS

Diseñar una interfaz de usuario mediante terminal que permita la captura intuitiva de datos de consumo individual de cada participante del grupo.

Implementar algoritmos de cálculo que determinen los subtotales por persona, el monto total de propina y su distribución proporcional según el consumo individual.

Desarrollar módulos de presentación de resultados que generen reportes detallados y resúmenes claros del desglose de pagos por participante.

Estructurar el código fuente de manera modular y documentada, facilitando el trabajo colaborativo entre los tres integrantes del equipo de desarrollo.

Validar el correcto funcionamiento del sistema mediante casos de prueba con datos reales de consumo en establecimientos gastronómicos.

---

# 4. MARCO TEÓRICO CONCEPTUAL-CONTEXTUAL

## 4.1. PROGRAMACIÓN ESTRUCTURADA

La programación estructurada es un paradigma de programación que utiliza estructuras de control bien definidas para organizar el código de manera lógica y secuencial. Según Joyanes (2008), este paradigma se basa en tres estructuras fundamentales: secuencia, selección e iteración. En el desarrollo de sistemas, la programación estructurada facilita la legibilidad del código, reduce la complejidad y mejora la mantenibilidad del software.

## 4.2. FUNCIONES Y MODULARIDAD

Las funciones son bloques de código reutilizables que realizan tareas específicas. Lutz (2013) define las funciones como mecanismos fundamentales para la abstracción y reutilización de código. La modularidad permite dividir un problema complejo en subproblemas más pequeños y manejables, facilitando el desarrollo colaborativo y la detección de errores.

## 4.3. ESTRUCTURAS DE DATOS EN PYTHON

Python ofrece diversas estructuras de datos nativas que facilitan la organización y manipulación de información. Los diccionarios son estructuras de datos que almacenan pares clave-valor, permitiendo acceso eficiente a la información mediante identificadores únicos. Las listas son colecciones ordenadas y mutables de elementos. Según Matthes (2019), estas estructuras son fundamentales para el desarrollo de aplicaciones que manejan datos complejos.

## 4.4. ALGORITMOS DE CÁLCULO PROPORCIONAL

El cálculo proporcional es una operación matemática que distribuye una cantidad total en partes proporcionales según criterios específicos. En el contexto de división de cuentas, la propina se distribuye proporcionalmente al consumo individual de cada persona, aplicando la fórmula:

Propina Individual = Propina Total × (Consumo Individual / Consumo Total)

Este método garantiza equidad en la distribución, ya que quien consume más aporta proporcionalmente más a la propina común.

## 4.5. INTERFAZ DE USUARIO POR TERMINAL

La interfaz de línea de comandos o terminal es un método de interacción entre el usuario y el programa mediante texto. Aunque menos visual que las interfaces gráficas, las interfaces de terminal son eficientes, consumen pocos recursos y son universalmente compatibles con diferentes sistemas operativos. Python proporciona funciones nativas como input() y print() para la interacción básica con el usuario.

## 4.6. VALIDACIÓN DE DATOS

La validación de datos es el proceso de verificar que la información ingresada por el usuario cumple con los criterios esperados. Esto incluye verificar tipos de datos, rangos numéricos válidos y formatos correctos. Una validación adecuada previene errores en tiempo de ejecución y mejora la robustez del sistema.

---

# 5. MÉTODOS, TÉCNICAS Y HERRAMIENTAS

## 5.1. MÉTODOS

**Método de desarrollo estructurado:** Se aplicó la metodología de programación estructurada, dividiendo el sistema en tres módulos principales con responsabilidades específicas y bien definidas.

**Método de prueba y error:** Durante el desarrollo se implementaron pruebas iterativas con diferentes casos de uso para validar el correcto funcionamiento de los algoritmos de cálculo.

## 5.2. TÉCNICAS

**Modularización de código:** División del programa en funciones independientes que realizan tareas específicas, facilitando el mantenimiento y la colaboración entre integrantes.

**Documentación de código:** Uso de comentarios descriptivos y nombres de variables significativos para mejorar la legibilidad del código fuente.

**Diseño top-down:** Diseño del sistema desde lo general hacia lo específico, comenzando con la estructura principal y descendiendo hacia los detalles de implementación.

## 5.3. HERRAMIENTAS

**Lenguaje de programación:** Python 3.8 o superior, seleccionado por su sintaxis clara, amplia documentación y compatibilidad multiplataforma.

**Editor de código:** Visual Studio Code o cualquier editor de texto compatible con Python.

**Terminal o consola:** Interfaz nativa del sistema operativo para la ejecución del programa.

**Sistema operativo:** Compatible con Windows, macOS y Linux, garantizando portabilidad del sistema.

---

**Tabla 1. Distribución de funciones por integrante**

| Integrante | Módulo Asignado | Funciones Desarrolladas |
|------------|-----------------|-------------------------|
| Integrante 1 | Interfaz y Captura | mostrar_menu(), capturar_datos() |
| Integrante 2 | Cálculos | calcular_total(), calcular_propina(), calcular_propina_por_persona(), calcular_totales_finales() |
| Integrante 3 | Presentación | mostrar_ticket(), mostrar_quien_paga() |

---

# 6. MARCO APLICATIVO

## 6.1. ARQUITECTURA DEL SISTEMA

El sistema desarrollado se estructura en tres módulos principales que interactúan de manera secuencial para procesar la información de división de cuentas. La arquitectura implementada sigue el patrón de entrada-proceso-salida, garantizando claridad en el flujo de datos.

## 6.2. MÓDULO DE INTERFAZ Y CAPTURA DE DATOS

Este módulo es responsable de la interacción con el usuario. Implementa dos funciones principales:

La función mostrar_menu() presenta las opciones disponibles al usuario mediante texto formateado en la terminal. Esta función no recibe parámetros y su único propósito es la presentación visual del menú principal.

La función capturar_datos() gestiona todo el proceso de ingreso de información. Primero solicita el número de participantes y almacena sus nombres en una lista. Posteriormente, para cada participante, solicita los ítems consumidos y sus precios, acumulando el total en un diccionario donde las claves son los nombres y los valores son los montos totales consumidos. Esta función retorna el diccionario de consumos para su procesamiento posterior.

## 6.3. MÓDULO DE CÁLCULOS

Este módulo concentra toda la lógica matemática del sistema. Se compone de cuatro funciones especializadas:

La función calcular_total() recibe el diccionario de consumos y retorna la suma total de todos los consumos mediante iteración sobre los valores del diccionario.

La función calcular_propina() aplica el porcentaje de propina al total de la cuenta, retornando el monto de propina total.

La función calcular_propina_por_persona() implementa el algoritmo de distribución proporcional. Para cada persona, calcula su proporción de consumo respecto al total y aplica esa proporción al monto total de propina. Esta función retorna un diccionario con las propinas individuales.

La función calcular_totales_finales() suma el consumo individual y la propina correspondiente de cada persona, generando el monto final que cada uno debe pagar.

## 6.4. MÓDULO DE PRESENTACIÓN DE RESULTADOS

Este módulo formatea y presenta la información procesada de manera clara y profesional.

La función mostrar_ticket() genera un reporte detallado que incluye el desglose por persona mostrando consumo, propina y total individual. Adicionalmente presenta un resumen general con subtotal de consumos, total de propina y monto general de la cuenta. El formato utiliza líneas de separación y alineación de texto para mejorar la legibilidad.

La función mostrar_quien_paga() presenta un resumen simplificado que lista a cada participante con su monto total a pagar, facilitando la consulta rápida de la información.

## 6.5. FLUJO DE EJECUCIÓN

El programa principal ejecuta un bucle que mantiene el sistema activo hasta que el usuario decida salir. En cada iteración, presenta el menú y captura la opción seleccionada. Si el usuario elige dividir una cuenta, se ejecuta secuencialmente: captura de datos, procesamiento de cálculos y presentación de resultados. Esta estructura garantiza que cada módulo cumpla su función específica sin interferir con los demás.

## 6.6. CASOS DE PRUEBA

Se realizaron pruebas con diferentes escenarios:

**Caso 1:** Tres personas con consumos variados y propina del 15 por ciento. El sistema calculó correctamente la distribución proporcional.

**Caso 2:** Dos personas con consumos idénticos y propina del 10 por ciento. El sistema dividió la propina equitativamente como se esperaba.

**Caso 3:** Cuatro personas con consumos muy dispares y propina del 20 por ciento. El sistema mantuvo la precisión en decimales y la proporcionalidad correcta.

---

# 7. CONCLUSIÓN

El desarrollo del sistema de división de cuentas cumplió satisfactoriamente con el objetivo general planteado, logrando automatizar el proceso de cálculo de gastos compartidos mediante un programa funcional y eficiente en lenguaje Python.

Los objetivos específicos fueron alcanzados en su totalidad. Se diseñó una interfaz de usuario intuitiva que permite la captura de datos de manera sencilla. Los algoritmos de cálculo implementados garantizan precisión en la determinación de subtotales y distribución proporcional de propina. Los módulos de presentación generan reportes claros y profesionales que facilitan la comprensión de los resultados.

La estructura modular del código permitió una distribución equitativa del trabajo entre los tres integrantes, demostrando las ventajas de la programación estructurada y el desarrollo colaborativo. Cada módulo puede ser mantenido y mejorado de forma independiente sin afectar el funcionamiento de los demás.

El sistema desarrollado representa una solución práctica a un problema cotidiano, demostrando cómo los conocimientos de programación pueden aplicarse para resolver necesidades reales. La portabilidad del programa, compatible con cualquier sistema operativo que soporte Python, amplía su utilidad y accesibilidad.

Como trabajo futuro, se propone implementar funcionalidades adicionales como almacenamiento persistente de historial, generación de reportes en formato PDF y desarrollo de una interfaz gráfica de usuario para mejorar la experiencia de uso.

---

# BIBLIOGRAFÍA

Joyanes, L. (2008). *Fundamentos de programación: algoritmos, estructura de datos y objetos* (4.ª ed.). McGraw-Hill.

Lutz, M. (2013). *Learning Python* (5.ª ed.). O'Reilly Media.

Matthes, E. (2019). *Python Crash Course: A Hands-On, Project-Based Introduction to Programming* (2.ª ed.). No Starch Press.

Python Software Foundation. (2024). *Python 3.12 Documentation*. https://docs.python.org/3/

Sommerville, I. (2011). *Ingeniería de software* (9.ª ed.). Pearson Educación.

---

# ANEXOS

## ANEXO N° 1: ÁRBOL DE PROBLEMAS Y OBJETIVOS

**PROBLEMA CENTRAL:**
Dificultad para calcular de manera precisa y equitativa la división de cuentas compartidas entre grupos de personas.

**CAUSAS:**
- Consumos individuales diferentes
- Distribución compleja de propina proporcional
- Errores en cálculos manuales
- Tiempo excesivo en operaciones aritméticas
- Falta de registro detallado

**EFECTOS:**
- Pagos inequitativos
- Malentendidos entre participantes
- Pérdida de tiempo
- Posibles conflictos interpersonales
- Incomodidad social

**OBJETIVO CENTRAL:**
Desarrollar un sistema automatizado que facilite el cálculo preciso y equitativo de división de cuentas compartidas.

**MEDIOS:**
- Interfaz de captura de datos
- Algoritmos de cálculo precisos
- Módulo de presentación clara
- Estructura modular de código
- Validación de casos de prueba

**FINES:**
- Distribución justa de pagos
- Transparencia en cálculos
- Ahorro de tiempo
- Mejora en relaciones interpersonales
- Confianza en el proceso

---

## ANEXO N° 2: CÓDIGO FUENTE COMPLETO DEL SISTEMA

```python
# Sistema de División de Cuentas entre Amigos
# Universidad Mayor de San Andrés
# INF-111 Programación I

# MÓDULO 1: INTERFAZ Y CAPTURA DE DATOS
def mostrar_menu():
    print("\n" + "="*40)
    print("  DIVISIÓN DE CUENTAS")
    print("="*40)
    print("1. Dividir una cuenta")
    print("2. Salir")

def capturar_datos():
    print("\n--- PASO 1: PERSONAS ---")
    num_personas = int(input("¿Cuántas personas son? "))
    personas = []
    
    for i in range(num_personas):
        nombre = input(f"Nombre {i+1}: ")
        personas.append(nombre)
    
    print("\n--- PASO 2: CONSUMOS ---")
    consumos = {}
    
    for persona in personas:
        print(f"\n{persona}:")
        total_persona = 0
        
        while True:
            item = input("  Item (o 'fin'): ")
            if item.lower() == 'fin':
                break
            precio = float(input("  Precio: $"))
            total_persona += precio
        
        consumos[persona] = total_persona
    
    return consumos

# MÓDULO 2: CÁLCULOS
def calcular_total(consumos):
    total = 0
    for persona in consumos:
        total += consumos[persona]
    return total

def calcular_propina(total, porcentaje):
    return total * (porcentaje / 100)

def calcular_propina_por_persona(consumos, propina_total, total_cuenta):
    propinas = {}
    
    for persona in consumos:
        proporcion = consumos[persona] / total_cuenta
        propinas[persona] = propina_total * proporcion
    
    return propinas

def calcular_totales_finales(consumos, propinas):
    totales = {}
    
    for persona in consumos:
        totales[persona] = consumos[persona] + propinas[persona]
    
    return totales

# MÓDULO 3: PRESENTACIÓN DE RESULTADOS
def mostrar_ticket(consumos, propinas, totales, porcentaje_propina):
    print("\n" + "="*50)
    print("              TICKET FINAL")
    print("="*50)
    
    for persona in consumos:
        print(f"\n{persona}:")
        print(f"  Consumo:        ${consumos[persona]:.2f}")
        print(f"  Propina ({porcentaje_propina}%):   ${propinas[persona]:.2f}")
        print(f"  TOTAL:          ${totales[persona]:.2f}")
        print("-" * 40)
    
    total_consumo = sum(consumos.values())
    total_propina = sum(propinas.values())
    total_general = sum(totales.values())
    
    print("\n" + "="*50)
    print("RESUMEN:")
    print(f"  Subtotal:       ${total_consumo:.2f}")
    print(f"  Propina:        ${total_propina:.2f}")
    print(f"  TOTAL GENERAL:  ${total_general:.2f}")
    print("="*50)

def mostrar_quien_paga(totales):
    print("\n¿QUIÉN PAGA CUÁNTO?")
    print("-" * 40)
    for persona, total in totales.items():
        print(f"  {persona}: ${total:.2f}")
    print("-" * 40)

# PROGRAMA PRINCIPAL
def main():
    while True:
        mostrar_menu()
        opcion = input("\nOpción: ")
        
        if opcion == "1":
            consumos = capturar_datos()
            total_cuenta = calcular_total(consumos)
            print(f"\nSubtotal: ${total_cuenta:.2f}")
            
            porcentaje = float(input("% de propina (ej: 10, 15): "))
            propina_total = calcular_propina(total_cuenta, porcentaje)
            propinas = calcular_propina_por_persona(consumos, propina_total, total_cuenta)
            totales = calcular_totales_finales(consumos, propinas)
            
            mostrar_ticket(consumos, propinas, totales, porcentaje)
            mostrar_quien_paga(totales)
            
        elif opcion == "2":
            print("\n¡Adiós!")
            break
        else:
            print("\nOpción inválida")

if __name__ == "__main__":
    main()
```

---

## ANEXO N° 3: MANUAL DE USUARIO

**1. REQUISITOS DEL SISTEMA**
- Python 3.8 o superior instalado
- Terminal o consola de comandos
- Sistema operativo: Windows, macOS o Linux

**2. INSTALACIÓN**
- Guardar el código en un archivo llamado dividir_cuentas.py
- No requiere instalación de librerías adicionales

**3. EJECUCIÓN DEL PROGRAMA**
- Abrir terminal o consola
- Navegar a la carpeta donde se guardó el archivo
- Ejecutar: python dividir_cuentas.py

**4. USO DEL SISTEMA**

**Paso 1:** Seleccionar opción 1 del menú principal

**Paso 2:** Ingresar el número de personas que compartirán la cuenta

**Paso 3:** Ingresar el nombre de cada persona

**Paso 4:** Para cada persona, ingresar los ítems consumidos y sus precios. Escribir "fin" cuando termine con cada persona

**Paso 5:** Ingresar el porcentaje de propina deseado

**Paso 6:** Revisar el ticket detallado con el desglose por persona

**Paso 7:** Consultar el resumen de quién paga cuánto

**5. EJEMPLO DE USO**

Entrada:
- 3 personas: Ana, Carlos, María
- Ana: Pizza $150, Refresco $30
- Carlos: Hamburguesa $120, Papas $40
- María: Ensalada $100
- Propina: 15%

Salida:
- Ana paga: $207.00
- Carlos paga: $184.00
- María paga: $115.00


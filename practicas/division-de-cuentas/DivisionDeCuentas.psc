// Sistema de División de Cuentas entre Amigos
// Universidad Mayor de San Andrés
// INF-111 Programación I
// ========================================
// MÓDULO 1: INTERFAZ Y CAPTURA DE DATOS
// ========================================
Función MostrarMenu
	Escribir '========================================'
	Escribir '      DIVISIÓN DE CUENTAS'
	Escribir '========================================'
	Escribir '1. Dividir una cuenta'
	Escribir '2. Salir'
FinFunción

Función CapturarDatos(personas,consumos,num_personas Por Referencia)
	Escribir ''
	Escribir '--- PASO 1: PERSONAS ---'
	Escribir '¿Cuántas personas son?'
	Leer num_personas
	// Capturar nombres
	Para i<-1 Hasta num_personas Con Paso 1 Hacer
		Escribir 'Nombre ', i, ':'
		Leer personas[i]
	FinPara
	Escribir ''
	Escribir '--- PASO 2: CONSUMOS ---'
	// Capturar consumos por persona
	Para i<-1 Hasta num_personas Con Paso 1 Hacer
		Escribir ''
		Escribir personas[i], ':'
		total_persona <- 0
		Repetir
			Escribir '  Item (o fin):'
			Leer item
			Si item<>'fin' Entonces
				Escribir '  Precio: $'
				Leer precio
				total_persona <- total_persona+precio
			FinSi
		Hasta Que item='fin'
		consumos[i] <- total_persona
	FinPara
FinFunción

// ========================================
// MÓDULO 2: CÁLCULOS
// ========================================
Función total <- CalcularTotal(consumos,num_personas)
	total <- 0
	Para i<-1 Hasta num_personas Con Paso 1 Hacer
		total <- total+consumos[i]
	FinPara
FinFunción

Función propina <- CalcularPropina(total,porcentaje)
	propina <- total*(porcentaje/100)
FinFunción

Función CalcularPropinasPorPersona(consumos,propinas,num_personas,propina_total,total_cuenta)
	Para i<-1 Hasta num_personas Con Paso 1 Hacer
		proporcion <- consumos[i]/total_cuenta
		propinas[i] <- propina_total*proporcion
	FinPara
FinFunción

Función CalcularTotalesFinales(consumos,propinas,totales,num_personas)
	Para i<-1 Hasta num_personas Con Paso 1 Hacer
		totales[i] <- consumos[i]+propinas[i]
	FinPara
FinFunción

// ========================================
// MÓDULO 3: PRESENTACIÓN DE RESULTADOS
// ========================================
Función MostrarTicket(personas,consumos,propinas,totales,num_personas,porcentaje_propina)
	Escribir ''
	Escribir '=================================================='
	Escribir '              TICKET FINAL'
	Escribir '=================================================='
	total_consumo <- 0
	total_propina <- 0
	total_general <- 0
	Para i<-1 Hasta num_personas Con Paso 1 Hacer
		Escribir ''
		Escribir personas[i], ':'
		Escribir '  Consumo:        $', consumos[i]
		Escribir '  Propina (', porcentaje_propina, '%):   $', propinas[i]
		Escribir '  TOTAL:          $', totales[i]
		Escribir '----------------------------------------'
		total_consumo <- total_consumo+consumos[i]
		total_propina <- total_propina+propinas[i]
		total_general <- total_general+totales[i]
	FinPara
	Escribir ''
	Escribir '=================================================='
	Escribir 'RESUMEN:'
	Escribir '  Subtotal:       $', total_consumo
	Escribir '  Propina:        $', total_propina
	Escribir '  TOTAL GENERAL:  $', total_general
	Escribir '=================================================='
FinFunción

Función MostrarQuienPaga(personas,totales,num_personas)
	Escribir ''
	Escribir '¿QUIÉN PAGA CUÁNTO?'
	Escribir '----------------------------------------'
	Para i<-1 Hasta num_personas Con Paso 1 Hacer
		Escribir '  ', personas[i], ': $', totales[i]
	FinPara
	Escribir '----------------------------------------'
FinFunción

// ========================================
// PROGRAMA PRINCIPAL
// ========================================
Algoritmo DivisionDeCuentas
	Definir opcion Como Cadena
	Definir num_personas Como Entero
	Definir personas Como Cadena
	Definir consumos, propinas, totales Como Real
	Definir total_cuenta, propina_total, porcentaje Como Real
	Dimensionar personas(100)
	Dimensionar consumos(100)
	Dimensionar propinas(100)
	Dimensionar totales(100)
	Repetir
		MostrarMenu()
		Escribir ''
		Escribir 'Opción:'
		Leer opcion
		Según opcion Hacer
			'1':
				CapturarDatos(personas,consumos,num_personas)
				total_cuenta <- CalcularTotal(consumos,num_personas)
				Escribir ''
				Escribir 'Subtotal: $', total_cuenta
				Escribir '% de propina (ej: 10, 15):'
				Leer porcentaje
				propina_total <- CalcularPropina(total_cuenta,porcentaje)
				CalcularPropinasPorPersona(consumos,propinas,num_personas,propina_total,total_cuenta)
				CalcularTotalesFinales(consumos,propinas,totales,num_personas)
				MostrarTicket(personas,consumos,propinas,totales,num_personas,porcentaje)
				MostrarQuienPaga(personas,totales,num_personas)
			'2':
				Escribir ''
				Escribir '¡Adiós!'
			De Otro Modo:
				Escribir ''
				Escribir 'Opción inválida'
		FinSegún
	Hasta Que opcion='2'
FinAlgoritmo

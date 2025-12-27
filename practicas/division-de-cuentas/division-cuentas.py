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



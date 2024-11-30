import random
import numpy as np

# Función para generar un valor binario aleatorio
def generar_binario(longitud):
    return ''.join(random.choice(['0', '1']) for _ in range(longitud))

# Función para convertir binario a decimal
def binario_a_decimal(bin_str, a, b, n_bits):
    valor_decimal = int(bin_str, 2)
    return a + ((b - a) / (2**n_bits - 1)) * valor_decimal

# Parámetros iniciales
a_pg, b_pg = 83, 89  # Rango de PG
a_rt, b_rt = 76, 86  # Rango de RT
a_tr, b_tr = 69, 85  # Rango de TR
n_bits = 18          # Número de bits por característica
tamaño_población = 118
tasa_cruce = 0.4     # 40%
tasa_mutación = 0.2  # 20% de la población puede mutar
regla_mutación = 0.4  # Mutan c1, c3, c5 y c7 si w <= 0.4
h_remplazo = 0.8      # Remplazo de los peores adaptados
n_generaciones = 50   # Máximo de generaciones

# Generación de población inicial
población = []
for _ in range(tamaño_población):
    individuo = {
        "PG": generar_binario(n_bits),
        "RT": generar_binario(n_bits),
        "TR": generar_binario(n_bits)
    }
    población.append(individuo)

# Evaluar función objetivo
def evaluar_aptitud(individuo):
    pg = binario_a_decimal(individuo["PG"], a_pg, b_pg, n_bits)
    rt = binario_a_decimal(individuo["RT"], a_rt, b_rt, n_bits)
    tr = binario_a_decimal(individuo["TR"], a_tr, b_tr, n_bits)
    return 0.4 * rt + 0.4 * tr + 0.2 * pg

# Selección estocástica universal
def seleccionar_padres_estocastico(población):
    aptitudes = [evaluar_aptitud(ind) for ind in población]
    suma_aptitudes = sum(aptitudes)
    probabilidades = [apt / suma_aptitudes for apt in aptitudes]
    puntos = np.linspace(0, 1, len(población), endpoint=False) + random.uniform(0, 1 / len(población))
    puntos = np.mod(puntos, 1)
    padres = [población[np.argmax(np.cumsum(probabilidades) >= p)] for p in puntos]
    return padres[:2]  # Seleccionar los dos primeros

# Cruce en punto medio
def cruce(padre1, padre2):
    punto_cruce = n_bits // 2
    hijo1 = {
        "PG": padre1["PG"][:punto_cruce] + padre2["PG"][punto_cruce:],
        "RT": padre1["RT"][:punto_cruce] + padre2["RT"][punto_cruce:],
        "TR": padre1["TR"][:punto_cruce] + padre2["TR"][punto_cruce:]
    }
    hijo2 = {
        "PG": padre2["PG"][:punto_cruce] + padre1["PG"][punto_cruce:],
        "RT": padre2["RT"][:punto_cruce] + padre1["RT"][punto_cruce:],
        "TR": padre2["TR"][:punto_cruce] + padre1["TR"][punto_cruce:]
    }
    return hijo1, hijo2

# Mutación específica
def mutar(individuo):
    if random.random() <= regla_mutación:
        for key in individuo:
            binario = list(individuo[key])
            for i in [0, 2, 4, 6]:  # c1, c3, c5, c7
                if i < len(binario):
                    binario[i] = '1' if binario[i] == '0' else '0'
            individuo[key] = ''.join(binario)
    return individuo

# Reemplazo por peor adaptado
def reemplazar_población(población, nuevos_individuos, h):
    población_completa = población + nuevos_individuos
    población_completa.sort(key=evaluar_aptitud, reverse=True)  # Ordenar por aptitud
    tamaño_remplazo = int(len(nuevos_individuos) * h)
    return población_completa[:len(población) - tamaño_remplazo] + nuevos_individuos[:tamaño_remplazo]

# Ciclo evolutivo
for generacion in range(n_generaciones):
    nuevos_individuos = []
    while len(nuevos_individuos) < tamaño_población:
        padre1, padre2 = seleccionar_padres_estocastico(población)
        if random.random() < tasa_cruce:
            hijo1, hijo2 = cruce(padre1, padre2)
        else:
            hijo1, hijo2 = padre1.copy(), padre2.copy()
        nuevos_individuos.extend([mutar(hijo1), mutar(hijo2)])
    población = reemplazar_población(población, nuevos_individuos, h_remplazo)

# Resultados finales
mejor_individuo = max(población, key=evaluar_aptitud)
mejor_pg = binario_a_decimal(mejor_individuo["PG"], a_pg, b_pg, n_bits)
mejor_rt = binario_a_decimal(mejor_individuo["RT"], a_rt, b_rt, n_bits)
mejor_tr = binario_a_decimal(mejor_individuo["TR"], a_tr, n_bits)
mejor_aptitud = evaluar_aptitud(mejor_individuo)

print("Mejor Individuo:")
print(f"PG: {mejor_pg:.2f}")
print(f"RT: {mejor_rt:.2f}")
print(f"TR: {mejor_tr:.2f}")
print(f"Aptitud: {mejor_aptitud:.2f}")

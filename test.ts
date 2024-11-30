// Parámetros iniciales
const a_pg = 83, b_pg = 89; // Rango de PG
const a_rt = 76, b_rt = 86; // Rango de RT
const a_tr = 69, b_tr = 85; // Rango de TR
const n_bits = 18; // Número de bits por característica
const tasa_cruce = 0.4; // 40%
const tasa_mutación = 0.2; // 20% de la población puede mutar
const regla_mutación = 0.4; // Mutan c1, c3, c5 y c7 si w <= 0.4
const h_remplazo = 0.8; // Remplazo de los peores adaptados
const n_generaciones = 50; // Máximo de generaciones

// Población inicial JSON
let poblacionInicial = [
    { PG: "010101010101010101", RT: "101010101010101010", TR: "110011001100110011" },
    { PG: "111111111111111111", RT: "000000000000000000", TR: "101010101010101010" },
    // Agregar más individuos si es necesario
];

// Generar un binario aleatorio
function generarBinario(longitud) {
    return Array.from({ length: longitud }, () => (Math.random() < 0.5 ? "0" : "1")).join("");
}

// Convertir binario a decimal
function binarioADecimal(binStr, a, b, nBits) {
    const valorDecimal = parseInt(binStr, 2);
    return a + ((b - a) / (Math.pow(2, nBits) - 1)) * valorDecimal;
}

// Evaluar la aptitud de un individuo
function evaluarAptitud(individuo) {
    const pg = binarioADecimal(individuo.PG, a_pg, b_pg, n_bits);
    const rt = binarioADecimal(individuo.RT, a_rt, b_rt, n_bits);
    const tr = binarioADecimal(individuo.TR, a_tr, b_tr, n_bits);
    return 0.4 * rt + 0.4 * tr + 0.2 * pg;
}

// Selección estocástica universal
function seleccionarPadresEstocastico(poblacion) {
    const aptitudes = poblacion.map(evaluarAptitud);
    const sumaAptitudes = aptitudes.reduce((a, b) => a + b, 0);
    const probabilidades = aptitudes.map((apt) => apt / sumaAptitudes);

    const puntos = Array.from({ length: poblacion.length }, (_, i) =>
        (i / poblacion.length) + Math.random() / poblacion.length
    ).map((p) => p % 1);

    return puntos.map((p) => poblacion[probabilidades.findIndex((_, i) => p <= probabilidades.slice(0, i + 1).reduce((a, b) => a + b, 0))]);
}

// Cruce en punto medio
function cruce(padre1, padre2) {
    const puntoCruce = Math.floor(n_bits / 2);
    const hijo1 = {
        PG: padre1.PG.slice(0, puntoCruce) + padre2.PG.slice(puntoCruce),
        RT: padre1.RT.slice(0, puntoCruce) + padre2.RT.slice(puntoCruce),
        TR: padre1.TR.slice(0, puntoCruce) + padre2.TR.slice(puntoCruce),
    };
    const hijo2 = {
        PG: padre2.PG.slice(0, puntoCruce) + padre1.PG.slice(puntoCruce),
        RT: padre2.RT.slice(0, puntoCruce) + padre1.RT.slice(puntoCruce),
        TR: padre2.TR.slice(0, puntoCruce) + padre1.TR.slice(puntoCruce),
    };
    return [hijo1, hijo2];
}

// Mutación específica
function mutar(individuo) {
    if (Math.random() <= regla_mutación) {
        ["PG", "RT", "TR"].forEach((clave) => {
            let binario = individuo[clave].split("");
            [0, 2, 4, 6].forEach((i) => {
                if (i < binario.length) {
                    binario[i] = binario[i] === "0" ? "1" : "0";
                }
            });
            individuo[clave] = binario.join("");
        });
    }
    return individuo;
}

// Reemplazo por peor adaptado
function reemplazarPoblacion(poblacion, nuevosIndividuos, h) {
    const poblaciónCompleta = [...poblacion, ...nuevosIndividuos];
    poblaciónCompleta.sort((a, b) => evaluarAptitud(b) - evaluarAptitud(a));
    const tamañoRemplazo = Math.floor(nuevosIndividuos.length * h);
    return [
        ...poblaciónCompleta.slice(0, poblacion.length - tamañoRemplazo),
        ...nuevosIndividuos.slice(0, tamañoRemplazo),
    ];
}

// Ciclo evolutivo
let poblacion = poblacionInicial;
for (let generacion = 0; generacion < n_generaciones; generacion++) {
    let nuevosIndividuos = [];
    while (nuevosIndividuos.length < poblacion.length) {
        const [padre1, padre2] = seleccionarPadresEstocastico(poblacion);
        if (Math.random() < tasa_cruce) {
            const [hijo1, hijo2] = cruce(padre1, padre2);
            nuevosIndividuos.push(mutar(hijo1), mutar(hijo2));
        } else {
            nuevosIndividuos.push(mutar({ ...padre1 }), mutar({ ...padre2 }));
        }
    }
    poblacion = reemplazarPoblacion(poblacion, nuevosIndividuos, h_remplazo);
}

// Resultados finales
const mejorIndividuo = poblacion.reduce((a, b) => (evaluarAptitud(a) > evaluarAptitud(b) ? a : b));
console.log("Mejor Individuo:");
console.log(`PG: ${binarioADecimal(mejorIndividuo.PG, a_pg, b_pg, n_bits).toFixed(2)}`);
console.log(`RT: ${binarioADecimal(mejorIndividuo.RT, a_rt, b_rt, n_bits).toFixed(2)}`);
console.log(`TR: ${binarioADecimal(mejorIndividuo.TR, a_tr, b_tr, n_bits).toFixed(2)}`);
console.log(`Aptitud: ${evaluarAptitud(mejorIndividuo).toFixed(2)}`);

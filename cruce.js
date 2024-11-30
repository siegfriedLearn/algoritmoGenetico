

let array = [
    {
        "id": 1,
        "GenCompleto":"101010000"
    },
    {
        "id": 2,
        "GenCompleto":"101010001"
    },
    {
        "id": 3,
        "GenCompleto":"101010011"
    },
    {
        "id": 4,
        "GenCompleto":"101010111"
    },
    {
        "id": 5,
        "GenCompleto":"101011111"
    }
]

function concatenarMitadesPorPares(array) {
    const resultado = [...array]; // Copiamos el array original para no modificarlo directamente
    
    // Recorremos el array en pasos de 2 elementos
    for (let i = 0; i < array.length; i += 2) {
        // Aseguramos que tenemos un par de elementos
        const genCompleto0 = array[i].GenCompleto;
        const genCompleto1 = array[i + 1] ? array[i + 1].GenCompleto : null; // Verificamos si existe un par

        // Si encontramos un par, concatenamos las mitades
        if (genCompleto1) {
            // Primera concatenación: primera mitad de genCompleto0 + segunda mitad de genCompleto1
            const mitad1 = genCompleto0.slice(0, genCompleto0.length / 2); // Primera mitad del objeto i
            const mitad2 = genCompleto1.slice(genCompleto1.length / 2); // Segunda mitad del objeto i+1

            const nuevoGenCompleto1 = mitad1 + mitad2;

            // Creamos un nuevo objeto con el GenCompleto concatenado
            const nuevoObjeto1 = {
                id: resultado.length + 1, // Asignamos un nuevo ID
                GenCompleto: nuevoGenCompleto1
            };

            // Segunda concatenación: segunda mitad de genCompleto0 + primera mitad de genCompleto1
            const mitad3 = genCompleto0.slice(genCompleto0.length / 2); // Segunda mitad del objeto i
            const mitad4 = genCompleto1.slice(0, genCompleto1.length / 2); // Primera mitad del objeto i+1

            const nuevoGenCompleto2 = mitad4 + mitad3;

            // Creamos otro nuevo objeto con el GenCompleto concatenado
            const nuevoObjeto2 = {
                id: resultado.length + 2, // Asignamos un nuevo ID
                GenCompleto: nuevoGenCompleto2
            };

            // Agregamos los nuevos objetos al array
            resultado.push(nuevoObjeto1, nuevoObjeto2);
        } 
    }
    
    // Retornamos el array actualizado
    return resultado;
}

console.log(concatenarMitadesPorPares(array))


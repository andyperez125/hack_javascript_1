/**
 * mediante el loop while agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * output => [1,3,5,7]
 */


let result = [];

let i = 1;
while (i <= 7) {
    result.push(i); // Agrega los números impares del 1 al 7 en el array result
    i += 2; // Incrementa en 2 para mantener los números impares
}

// Exporta el array result
module.exports = result;
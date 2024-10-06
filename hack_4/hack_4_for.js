/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * output => [1,3,5,7]
 */


let result = [];

for (let i = 1; i <= 7; i += 2) {
    result.push(i); // Agrega los números impares del 1 al 7 en el array result
}

// Exporta el array result
module.exports = result;
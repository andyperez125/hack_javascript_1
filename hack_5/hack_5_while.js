/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * output => [7,5,3,1]
 */


let result = [];

let i = 7;
while (i >= 1) {
    result.push(i); // Agrega los números 7, 5, 3, 1 al array result
    i -= 2; // Disminuye en 2 para obtener los números impares
}

// Exporta el array result
module.exports = result;
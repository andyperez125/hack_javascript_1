/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * output => [7,5,3,1]
 */


let result = [];

for (let i = 7; i >= 1; i -= 2) {
    result.push(i); // Agrega los números 7, 5, 3, 1 al array result
}

// Exporta el array result
module.exports = result;
/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * output => [5,4,3,2,1]
 */


let result = [];

let i = 5;
while (i >= 1) {
    result.push(i); // Agrega los números del 5 al 1 
    i--; // Decrementa el contador
}

// Exporta el array result
module.exports = result;
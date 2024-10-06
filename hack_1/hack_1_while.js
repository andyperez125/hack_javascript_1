/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */


let result = [];

let i = 0;
while (i <= 5) {
    result.push(i); // Agrega los números del 0 al 5 
    i++; // Incrementa el contador
}

// Exporta el array result
module.exports = result;
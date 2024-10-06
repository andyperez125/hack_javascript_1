/**
 * mediante el loop while agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * output => [1,2,3,4,5]
 */


let result = [];

let i = 1;
while (i <= 5) {
    result.push(i); // Agrega los números del 1 al 5 en el array result
    i++; // Incrementa el contador
}

// Exporta el array result
module.exports = result;
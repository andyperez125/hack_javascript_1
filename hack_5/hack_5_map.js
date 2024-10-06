/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * output => [7,5,3,1]
 */


let result = [0, 1, 2, 3].map(num => 7 - num * 2); // Genera [7, 5, 3, 1] usando map

// Exporta el array result
module.exports = result;
/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * output => [1,3,5,7]
 */


let result = [0, 1, 2, 3].map(num => num * 2 + 1); // Genera [1, 3, 5, 7] usando map

// Exporta el array result
module.exports = result;
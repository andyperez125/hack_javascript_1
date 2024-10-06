/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * output => 2   
 */


let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = 0;

// Recorremos el array y contamos cuántos elementos empiezan con "b"
result = arr.filter(item => item.startsWith("b")).length;

//export result
module.exports = result;
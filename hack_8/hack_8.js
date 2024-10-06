/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * output => ["b@r","b@z","QUX"]   
 */


let arr = ["foo","bar","baz","qux","echo"];
let result = [];

// 1 - Se extraen los elementos "bar", "baz", "qux"
let selectedItems = arr.slice(1, 4); // ["bar", "baz", "qux"]

// 2 - Se reemplaza el carácter "a" por "@" en los primeros dos elementos
let firstTwo = selectedItems.slice(0, 2).map(item => item.replace("a", "@"));

// 3 - Convertimos el último elemento "qux" a mayúsculas
let lastOne = selectedItems[2].toUpperCase(); // "QUX"

// 4 - Anexar los resultados al array result
result = [...firstTwo, lastOne];

//export result
module.exports = result;
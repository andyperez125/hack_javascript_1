/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * output => ["bar","qux","octo","foobar"]   
 */


let arr = ["foo", "bar", "baz", "qux", "echo", "octo", "cat", "foobar", "quux"];
let result = [];

// Recorremos el array usando un loop y verificamos los índices impares
for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
        result.push(arr[i]); // Si el índice es impar, agregamos el elemento a result
    }
}

//export result
module.exports = result;
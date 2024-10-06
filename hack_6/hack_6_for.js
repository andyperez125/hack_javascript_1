/**
 * mediante el loop for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */


let str = "fooziman";
let result = [];

for (let i = 0; i < str.length; i++) {
    result.push(str[i]); // Agrega cada carácter al array result
}

// Exporta el array result
module.exports = result;
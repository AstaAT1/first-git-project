const prompt = require('prompt-sync')();
let num = Number(prompt("Entrer la valeur de Nombre : "))
let bin = num.toString(2)
let hex = num.toString(16)
console.log(`Valeur en binaire = ${bin}\nValeur en Hexadecimal = ${hex}`)
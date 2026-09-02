const prompt = require('prompt-sync')();

let second = Number(prompt('Entre secondes : '))

let hours = second / 3600
let modulo = second % 3600
let minutes = modulo / 60
let seconds = modulo % 60

console.log(`hours : ${hours}\nminutes : ${minutes}\nseconds : ${seconds}`);



const prompt = require('prompt-sync')();
let num = Number(prompt("Entrer your number : "))
let a = num % 10
let b = parseInt(num / 10) % 10
let c = parseInt(num / 100) % 10
let d = parseInt(num / 1000) % 10

console.log(a, b, c, d);
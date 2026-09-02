const prompt = require('prompt-sync')();
let number = Number(prompt('entre a number : '))

let a = number % 10
let b = parseInt(number / 10)%10
let c = parseInt(number / 100) % 10
let d = parseInt(number /1000)

console.log(a,b,c,d);

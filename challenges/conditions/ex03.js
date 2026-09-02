const prompt = require('prompt-sync')();
let a = Number(prompt('entre the first number : '))
let b = Number(prompt('entre the second number : '))

let total = 0 
if (a == b) {
    total = a + b + a
}
else{
    total= a + b
}
console.log(total)
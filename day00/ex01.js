const prompt = require('prompt-sync')();
let number1 = Number(prompt('entre your first number : '))
let number2 = Number(prompt('entre your second number : '))

let somme = number1 + number2;
let difference = number1 - number2;
let produit = number1 * number2;
let quotient = number1 / number2;

console.log(`${somme}`);
console.log(`${difference}`);
console.log(`${produit}`);
console.log(`${quotient}`);

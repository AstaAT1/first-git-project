const prompt = require('prompt-sync')();

let number = Number(prompt('Give a number: '))
let total = 0
for (let i = 1; i <= number; i++) {
    
    total += i 
}
console.log(total)
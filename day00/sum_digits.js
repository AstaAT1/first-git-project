const prompt = require('prompt-sync')();
let number = prompt('give a number: ')
let total = 0

for (let i = 0; i < number.length; i++) {
    total += Number(number[i])
}

console.log(total)


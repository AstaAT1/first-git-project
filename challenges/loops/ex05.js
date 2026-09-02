const prompt = require('prompt-sync')();

let base = Number(prompt('entre your base : '))
let exposant = Number(prompt('entre your exposant : '))
let total = 1
for (let i = 0; i < exposant; i++) {
    total *= base
}
console.log(total);

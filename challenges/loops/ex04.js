const prompt = require('prompt-sync')();

let n = Number(prompt('entre your number : '))
let odd = 1
for (let i = 0; i < n; i++) {
        console.log(odd)
        odd=odd + 2
}
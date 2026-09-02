const prompt = require('prompt-sync')();

let n = Number(prompt('entre your number : '))
let even = 2
for (let i = 1; i <= n; i++) {
    console.log(even)
    even += 2
}
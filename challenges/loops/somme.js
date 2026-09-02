const prompt = require('prompt-sync')();

let n = Number(prompt('entre your number : '))
let total = 0;

for (let i = 1;   i <= n; i++) {

    total += i
}
console.log(total)
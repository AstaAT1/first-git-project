const prompt = require('prompt-sync')();
let n = Number(prompt('Enter your number: '))
let string = String(n)
let reverse = "     "

for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i]
}
// let reversenum = Number(reverse)
console.log(reverse)
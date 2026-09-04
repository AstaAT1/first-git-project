const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
for (let i = 1; i <= num; i++) {
    let ask = prompt('entre element : ')
    arr.push(ask) 
}
console.log(arr)
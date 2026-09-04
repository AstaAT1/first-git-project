const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
let total = 0 
for (let i = 1; i <= num; i++) {
    let ask = Number(prompt('entre element : '))
    arr.push(ask)
    
}
 for (let j = 0 ; j < num ; j++ ) {
        total += arr[j]
    }
console.log(total)
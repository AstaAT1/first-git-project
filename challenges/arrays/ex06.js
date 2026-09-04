const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
let math = Number(prompt('entre a number for multiplication '))
for (let i = 1; i <= num; i++) {
    let ask = Number(prompt('entre element : '))
    arr.push(ask)

}
console.log(arr)
for (let j = 0; j < num ; j++) {
    arr[j] *= math
}
console.log(arr)


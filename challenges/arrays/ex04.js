const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
let max = 0 
for (let i = 1; i <= num; i++) {
    let ask = Number(prompt('entre element : '))
    arr.push(ask)

}
 for (let j = 0 ; j < num ; j++ ) {
        if (max <= arr[j]) {
            max = arr[j]
        }
    }
console.log(arr)
console.log(max);


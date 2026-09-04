const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
let min = 0 
for (let i = 1; i <= num; i++) {
    let ask = Number(prompt('entre element : '))
    arr.push(ask)

}
 for (let j = 0 ; j < num ; j++ ) {
    
        if (min <= arr[j]) {
            min = arr[j]
        }
    }
    for (let x = 0; x < num; x++) {
        if (min >= arr[x]) {
            min = arr[x]
        }
        
    }
console.log(arr)
console.log(min)
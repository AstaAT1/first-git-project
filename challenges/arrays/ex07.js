const prompt = require('prompt-sync')();

let num = Number(prompt('entre a number : '))
let arr = []
for (let i = 1; i <= num; i++) { 
    let ask = Number(prompt('entre element : '))
    arr.push(ask)
}
console.log(arr)
 for (let i = 0; i < num - 1; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = swap
      }
       }
     }
console.log(arr)
// console.log(lenght);



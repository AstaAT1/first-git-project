const prompt = require('prompt-sync')();

let arr = [
    [],
    [],
    []
]

let ask = Number(prompt('how many element you want in array : '))
let count = 1
for (let i = 0; i < ask; i++) {
    for (let j = 0; j < ask; j++) {
    let element = prompt(`entre your element (array ${count}): `)
    arr[i].push(element)
    }
    count++
}
let total = 0
for (let i = 0; i < 3; i++) {
    total += parseInt(arr[i][0])
}
console.log(arr);
console.log(total)
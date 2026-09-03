const prompt = require('prompt-sync')();
let string = prompt('entre your string : ')
let count = 0
for (let i = 0; string[i] !== undefined ; i++) {
    count++
}
console.log(`lenght of (${string}) is ${count}`)
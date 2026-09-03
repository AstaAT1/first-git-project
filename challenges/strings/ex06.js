const prompt = require('prompt-sync')();

let string = prompt('entre your string : ')
let char = prompt('entre your character : ')
let n = 0
let count = 0
for (let i = 0; string[i] !== undefined ; i++) {
    count ++
}
for (let i = 0; i <= count; i++) {
    if (char === string[i]) {
        n++
    }
}
console.log(`there is "${n}" characters of "${char}" in the string`)
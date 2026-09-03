const prompt = require('prompt-sync')();
let n = prompt('Enter your string: ')
let reverse = ""
let count = 0
for (let i = 0; n[i] !== undefined ; i++) {
    count ++
}
// console.log(count)
for (let i = count - 1; i >= 0; i--) {
    reverse += n[i]
}
console.log(reverse)
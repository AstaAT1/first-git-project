const prompt = require('prompt-sync')();
let n = prompt('Enter your string: ')
let remove = ""
for (let i = 0; n[i] !== undefined ; i++) {
     if (n[i] !== ' ') {
        remove += n[i]   
    }
}
console.log(remove)
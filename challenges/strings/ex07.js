const prompt = require('prompt-sync')();

let string = prompt('entre your string : ')

let count = 0;
for (let i = 0; string[i] !== undefined; i++) {
    count++
}
let result = ""
for (let i = 0; i < count; i++) {
   let code = string.charCodeAt(i)
   if (code >= 97 && code <= 122) {
       result += String.fromCharCode(code - 32)
   } else {
       result += string[i]
   }
}
console.log(result)
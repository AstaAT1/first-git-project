const prompt = require('prompt-sync')();
let n = Number(prompt("Entrer your number : "))
let a = 0 ,b = 1
let fibonacci = 0
for (let i = 1; i < n; i++) {
 fibonacci = a + b
 a = b
 b = fibonacci
 console.log(`F(${i}) = ${fibonacci}`)
    
}
console.log(fibonacci)


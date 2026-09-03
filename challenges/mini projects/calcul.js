const prompt = require('prompt-sync')();

function sum() {
    let n1 = Number(prompt('entre your first number : '))
    let n2 = Number(prompt('entre your second number : '))
    return console.log(`result = ${n1 + n2}`)
}
function sectration() {
     let n1 = Number(prompt('entre your first number : '))
    let n2 = Number(prompt('entre your second number : '))
    return console.log(`result = ${n1 - n2}`)
}
function division() {
      let n1 = Number(prompt('entre your first number : '))
    let n2 = Number(prompt('entre your second number : '))
    if (n2 == 0) {
        return console.log('Error , you cant division / 0')
    }
    else {
    return console.log(`result = ${n1 / n2}`)
    }
}
function multiplication() {
      let n1 = Number(prompt('entre your first number : '))
    let n2 = Number(prompt('entre your second number : '))
    return console.log(`result = ${n1 * n2}`)
}
while (true) {
let welcome = prompt('Welcome to your Calcul\nCan you choose what do you want :\n1- Sum\n2- Sectration \n3- Division\n4- Multiplication\n5- Quit\n: ')

let count = 0;
for (let i = 0; welcome[i] !== undefined; i++) {
    count++
}
// console.log('1- Sum\n2- sectration \n3- division\n4- multiplication')
let result = ""
for (let i = 0; i < count; i++) {
   let code = welcome.charCodeAt(i)
   if (code >= 65 && code <= 90) {
       result += String.fromCharCode(code + 32)
   } else {
       result += welcome[i]
   }
}
if ( result == 'sum' || welcome == '1') {
   sum()
}
else if ( result == 'sectration' || welcome == '2') {
   sectration()
}

else if ( result == 'division' || welcome == '3') {
   division()
}
else if (result == 'multiplication' || welcome == '4') {
   multiplication()
}
else if (result == 'quit' || welcome == '5') {
   console.log('fin program')
   break
}
}
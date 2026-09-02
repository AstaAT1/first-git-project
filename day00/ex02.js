const prompt = require('prompt-sync')();
let number = Number(prompt('entre your number : '))
if (number % 2 == 0 ) {
    console.log(`The Number ${number} is odd`);
}
else {
    console.log(`The Number ${number} is even`);
}
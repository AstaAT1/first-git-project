const prompt = require('prompt-sync')();
let number = Number(prompt('give a number : '));

let chance = 3

for (let i = 0; i < 3; i++) {
    var guess_number = Number(prompt(`You have ${chance} chance to Guess the number : `));
    if (number > guess_number) {
        console.log('your number is smaller')
    } else if (number < guess_number) {
        console.log('your number is large')
    } else {
        console.log('congratulations')
        break
    }
    chance --
}


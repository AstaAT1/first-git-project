const prompt = require('prompt-sync')();

let ask1 = prompt('entre name of the book : ')
let ask2 = prompt('entre name of the author : ')
let ask3 = Number(prompt('entre year of the book : '))

function objet() {
    return {
    name : ask1,
    author : ask2,
    year : ask3,
    }

}
console.log(objet(ask1,ask2 , ask3))

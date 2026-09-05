const prompt = require('prompt-sync')();

let ask1 = prompt('entre your first name : ')
let ask2 = prompt('entre your second name : ')
let ask3 = Number(prompt('entre your age : '))
let profile = {
    first_name : "",
    second_name : '',
    age : ""
}
profile.first_name = ask1
profile.second_name = ask2
profile.age = ask3

console.log(profile.first_name)
console.log(profile.second_name)
console.log(profile.age)



const prompt = require('prompt-sync')();

let arr = {
  x : 10,
  y : 3
}
console.log(arr)
let ask1 = Number(prompt('entre the new element of x : '))
let ask2 = Number(prompt('entre the new element of y : '))
arr.x = ask1 , arr.y =ask2
console.log(arr)
console.log(`A(${arr.x},${arr.y})`);



const prompt = require('prompt-sync')();

while(true){
     let gi = Number(prompt('give a number : '))
    if (gi !== 5) {
        console.log('go')
        break
    }
    else{
        console.log('gi');
        // break
    }
}
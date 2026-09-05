let arr = [29 , 10 , 14 , 37 , 13]
let min = 0

 for (let j = 0 ; j < arr.length ; j++ ) {
    
        if (min <= arr[j]) {
            min = arr[j]
        }
    }
    for (let x = 0; x < arr.length; x++) {
            if (min >= arr[x]) {
            min = arr[x]
            }
            for (let i = 0; i < array.length; i++) {
                  if (min <= arr[i]) {
                arr[i] = min
            }
                
            }
          
    }
    console.log(arr[0])
    console.log(arr)
    console.log(min)

//     let arr = [ 29, 10, 14, 37, 13 ]
// for (let i = 0; i < arr.length - 1; i++) {
//     let minIdx = i
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[minIdx]) {
//             minIdx = j
//         }
//     }

//     if (minIdx !== i) {
//         let temp = arr[i];
//         arr[i] = arr[minIdx];
//         arr[minIdx] = temp;
//     }
// }

// console.log(arr)
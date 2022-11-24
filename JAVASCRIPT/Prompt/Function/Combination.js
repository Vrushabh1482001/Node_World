/* Write a JS function that generates all combinations of a string. 
Example string : 'dog'
Expected Output : d,do,dog,o,og,g */

/*** Named Function ***/

//const prompt = require("prompt-sync")();

function combination(str) {
    let len = str.length;
    let CombinationArr = [];
    let i = 0;
    let j = 0;
    for (i = 0; i < len; i++) {
        for (j = 0; j < len; j++) {
            if (i == j) {
                CombinationArr.push(str[i]);
            }
            else {
                CombinationArr.push(str[i] + str[j]);
            }
        }
    }
    // console.log(CombinationArr);
    return CombinationArr;
}

// let String = (prompt("Enter a value : "));

console.log(combination("Dog"));




// function StringDivide(str) {

//     let len = str.length;
//     let arr = [];
//     for (let i = 0; i < len; i++) {
//         if (i == 0) {
//             arr.push(str[i]);
//         }
//         else {
//             arr.push(arr[i - 1] + str[i]);
//         }
//     }
//     console.log(arr);
//     // return arr;
// }
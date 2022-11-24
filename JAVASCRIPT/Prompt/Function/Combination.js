/* Write a JS function that generates all combinations of a string. 
Example string : 'dog'
Expected Output : d,do,dog,o,og,g */

/*** Named Function ***/

//const prompt = require("prompt-sync")();

function StringDivide(str) {

    let len = str.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
        if (i == 0) {
            arr.push(str[i]);
        }
        else {
            arr.push(arr[i - 1] + str[i]);
        }
    }
    console.log(arr);
    // return arr;
}

// let String = parseInt(prompt("Enter a value : "));
StringDivide("Dog");
// console.log(Palindrome(String));


/*** Anonymous Function ***/

// let Palindrome = (str) => {

//     let i;
//     let len = str.length;
//     for (i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1]) {
//             return "String Not pelindrome."
//         }
//         --len;
//     }
//     return "string is palindrome."
// }

// let String = parseInt(prompt("Enter a value : "));

// console.log(Palindrome(String));
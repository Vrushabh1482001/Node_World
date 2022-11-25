/* Write a JS function that checks whether a passed string is palindrome or not?  */


/*** Named Function ***/

const prompt = require("prompt-sync")();
/*function Palindrome(str) {
    let i;
    let len = str.length;
    for (i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1]) {
            return "String Not pelindrome.";
        }
        --len;
    }
    return "string is palindrome.";
}

let String = parseInt(prompt("Enter a value : "));

console.log(Palindrome(String)); */


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
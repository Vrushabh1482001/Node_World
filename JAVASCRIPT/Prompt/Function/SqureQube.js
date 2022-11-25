/*** Write a JS function that input a number and return square & qube of number in aray. ***/


/*** Named Function ***/

//const prompt = require("prompt-sync")();

/* function SquareQube(Arr) {
    let SquareArr = [];
    let QubeArr = [];
    let ResultArr = [];
    let i = 0;
    do {
        SquareArr.push(Arr[i] * Arr[i]);s
        QubeArr.push(Arr[i] * Arr[i] * Arr[i]);
        i++;
    } while (i < Arr.length);

    return ResultArr = [SquareArr, QubeArr];

}

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(SquareQube(Arr)); */


/*** Anonymous Function ***/

/* 
SquareQube = (Arr) => {
    let SquareArr = [];
    let QubeArr = [];
    let ResultArr = [];
    let i = 0;
    do {
        SquareArr.push(Arr[i] * Arr[i]);
        QubeArr.push(Arr[i] * Arr[i] * Arr[i]);
        i++;
    } while (i < Arr.length);

    return ResultArr = [SquareArr, QubeArr];

}

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(SquareQube(Arr)); */


/*** Extra ***/

/* function SquareQube(number, pow) {
    let SquareQubeArr = [];
    for (i = 1; i <= pow; i++) {
        SquareQubeArr.push(Math.pow(number, i));
    }

    return SquareQubeArr;

}
let number = parseInt(prompt("Enter a value : "));
let pow = parseInt(prompt("Enter a pow value : "));
console.log(SquareQube(number, pow)); */


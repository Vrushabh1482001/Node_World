/* Write a JS function that reverse a number.
Example x = 32243;
Expected Output : 34223 */

/*** Named Function ***/

const prompt = require("prompt-sync")();

/* function ReverseNumber(num) {

    let LastDigit = 0;
    let ReverseNumber = 0;

    do {
        LastDigit = num % 10;
        ReverseNumber = ReverseNumber * 10 + LastDigit;
        num = Math.floor(num /= 10);
    } while (num != 0);

    return ReverseNumber;
}

let number = parseInt(prompt("Enter a value : "));

console.log(ReverseNumber(number));
 */

/*** Anonymous Function ***/

/* let ReverseNumber1 = (num) => {

    let LastDigit = 0;
    let ReverseNumber = 0;

    do {
        LastDigit = num % 10;
        ReverseNumber = ReverseNumber * 10 + LastDigit;
        num = Math.floor(num /= 10);
    } while (num != 0);

    return ReverseNumber;
}

let number = parseInt(prompt("Enter a value : "));
console.log(ReverseNumber1(number)); */
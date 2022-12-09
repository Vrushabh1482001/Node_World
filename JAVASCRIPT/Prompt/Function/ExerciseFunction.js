// 1. Write a JS function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

/* let x = 32243;
let result = Number(Array.from(x.toString()).reverse().join(""));
console.log(typeof result);
console.log(result); */

/*******************************************************************************************************************************************************************************************************************/

// 2. Write a JS function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun.

/* let CheckPalindrom = (str) => {
    return str == str.split('').reverse().join('');
}
let str = "madam";
let str1 = "nursesrun";
let str2 = "Vrushabh";
CheckPalindrom(str) ? console.log(`${str} is palindrome`) : console.log(`${str} is not palindrome`);
CheckPalindrom(str1) ? console.log(`${str1} is palindrome`) : console.log(`${str1} is not palindrome`);
CheckPalindrom(str2) ? console.log(`${str2} is palindrome`) : console.log(`${str2} is not palindrome`); */

/*******************************************************************************************************************************************************************************************************************/

// 3. Write a JS function that generates all combinations of a string. 
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

/* function PossibleCom(Str) {
    let CombinationArr = [];
    for (let i = 0; i < Str.length; i++) {
        for (let j = i + 1; j < Str.length + 1; j++) {
            CombinationArr.push(Str.slice(i, j));
        }
    }
    return CombinationArr.join("-");
}
console.log(PossibleCom("dog")); */

/*******************************************************************************************************************************************************************************************************************/

// 4. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

/* function AphabeticalAsendingOrder(str) {
    return str.toLowerCase().split("").sort().join(" - ");
}
console.log(AphabeticalAsendingOrder("Vrushabh")); */

/*******************************************************************************************************************************************************************************************************************/


// 5. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

/* FirstLetterCapital = (string) => {


    let Arr = string.split('');
    for (let i in Arr) {
        if (i == 0 || Arr[i - 1] == " ") {
            Arr[i] = Arr[i].toUpperCase();
        }
    }
    return Arr.join('');
}
console.log(FirstLetterCapital("the quick brown fox.")); */

/*******************************************************************************************************************************************************************************************************************/

// 6. Write a JS function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

/* let longestWord = (String) => {
    let Arr = String.split(" ");
    let largerLength = Arr[0].length;
    for (let i of Arr) {
        if (i.length > largerLength) {
            largerLength = i.length;
        }
    }
    return Arr.filter(x => x.length == largerLength);
}
console.log(longestWord("Web Development Tutorial")); */

/*******************************************************************************************************************************************************************************************************************/


// 7. Write a JS function that accepts a string as a parameter and counts the number of vowels within the string.

/* let CountVowels = (String) => {
    let regex = /[aeiou]/gi;
    let Arr = [...String.matchAll(regex)];
    return Arr.length;
}
console.log(CountVowels('Vrushabh Satasiya')); */

/*******************************************************************************************************************************************************************************************************************/


// 8. Write a JS function that accepts a number as a parameter and check the number is prime or not. 

/* function PrimeNumber(number) {

    if (number == 1) {
        return "1 is Constant."
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return `${number} is not a prime`;
            }
        }
        return `${number} is prime number.`;
    }
}
console.log(PrimeNumber(5)); */


/*******************************************************************************************************************************************************************************************************************/


// 9. Write a JS function which accepts an argument and returns the type. 

/* let TypeArg = (Arg) => {
    return typeof Arg;
}
console.log(TypeArg("Vrushabh")) */

/*******************************************************************************************************************************************************************************************************************/


// 10. Write a JS function which returns the n rows by n columns identity matrix.

/* let Matrix = (Arr, n) => {
    let result = [];
    result.length = n;
    while (Arr.length != 0) {
        for (let j = 0; j < n; j++) {
            console.log(Arr);
            let rowArr = [];
            rowArr.push(Arr[0]);
            Arr.shift();
        }
        result.push(rowArr);
    }
    console.log(result);

}

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Matrix(Arr, 3)); */

/*******************************************************************************************************************************************************************************************************************/


// 11. Write a JS function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 

/* let SecondLargeSmall = (Arr) => {
    Arr.sort();
    return `Second Lowest ${Arr[1]} And Second Greatest ${Arr[Arr.length - 2]} `;
}
let Arr = [11, 22, 33, 44, 55, 88, 99, 32, 45, 67, 12, 34, 67, 89, 101, 345]
console.log(SecondLargeSmall(Arr)); */

/*******************************************************************************************************************************************************************************************************************/

// 12. Write a JS function which says whether a number is perfect. 
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

/* let PerfectNumber = (number) => {
    let temp = 0;
    for (let i = 1; i < number / 2; i++) {
        if (number % i == 0) {
            temp += i;
        }
    }
    return (temp == number / 2) ? `${number} is Perfect Number` : `${number} is not Perfect Number`;
}
console.log(PerfectNumber(496)); */


/*******************************************************************************************************************************************************************************************************************/

// 13. Write a JS function to compute the factors of a positive integer. 

/* let CountFactor = (number) => {
    let Result = [];
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            Result.push(i);
        }
    }
    return Result.length;
}
console.log(CountFactor(48)); */

/*******************************************************************************************************************************************************************************************************************/

// 14. Write a JS function to convert an amount to coins. 
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1.

/* let RupeestoCoins = (number) => {
    let Result = [];
    let Coinstype = [25, 10, 5, 2, 1];
    let count = 0;
    for (let i of Coinstype) {
        if (number >= i) {
            count = parseInt(number / i);
            number = parseInt(number % i);
            Result.push(`${i} : ${count}`);
        }
        // console.log(Result);
    }

    return Result;
}
console.log(RupeestoCoins(46)); */

/* let RupeestoCoins = (number) => {
    let Result = [];
    let Coinstype = [25, 10, 5, 2, 1];
    let count = 0;
    while (number != 0) {
        if (number >= 25) {
            number -= 25;
            Result.push(25);
        }
        else if (number >= 10) {
            number -= 10;
            Result.push(10);
        }
        else if (number >= 2) {
            number -= 2;
            Result.push(2);
        }
        else {
            number -= 1;
            Result.push(1);
        }

    }

    return Result;
}
console.log(RupeestoCoins(46)); */

/*******************************************************************************************************************************************************************************************************************/

// 15. Write a JS function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

/* const prompt = require("prompt-sync")();
function Power(number, pow) {
    return Math.pow(number, pow);
}
let number = parseInt(prompt("Enter a value : "));
let pow = parseInt(prompt("Enter a pow value : "));
console.log(Power(number, pow)); */


/*******************************************************************************************************************************************************************************************************************/

// 16. Write a JS function to extract unique characters from a string. 
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

/* let uniqueChar = (String) => {
    let result = "";
    for (let i of String) {
        console.log(i);
        if (result.match(i) != i) {
            result += i;
            console.log(result);
        }
    }
    return result;
}
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog")); */
/*******************************************************************************************************************************************************************************************************************/

// 17. Write a JS function to  get the number of occurrences of each letter in specified string. 

// let Occurrences = (String) => {
    // String = String.toLowerCase().split("").sort().join("");
/*     let result = [];
    for (let i of String) {
        let Arr = [];
        Arr = [...String.matchAll(i)];
        result.push(`${i} : ${Arr.length}`);
    } */

/*     let result1 = [];
    for (let i of String) {
        let Arr = [];
        Arr = [...String.matchAll(i)];
        // String = String.replaceAll(i, '');
        result1.push(`${i} : ${Arr.length}`);
    }
    let result = [];
    for (let i of result1) {
        if (!(result.includes(i))) {
            result.push(i);
        }
    }

    return result;
}
console.log(Occurrences('thequickbrownfoxjumpsoverthelazydog')); */


/*******************************************************************************************************************************************************************************************************************/

// 18. Write a function for searching JS arrays with a binary search. 
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

/*******************************************************************************************************************************************************************************************************************/

// 19. Write a JS function that returns array elements larger than a number. 

/*******************************************************************************************************************************************************************************************************************/

// 20. Write a JS function that generates a string id (specified length) of random characters. 
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

/*******************************************************************************************************************************************************************************************************************/

// 21. Write a JS function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

/*******************************************************************************************************************************************************************************************************************/

// 22. Write a JS function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 

/*******************************************************************************************************************************************************************************************************************/

// 23. Write a JS function to find the first not repeated character. 
// Sample arguments : 'abacddbec'
// Expected output : 'e'

/*******************************************************************************************************************************************************************************************************************/

// 24. Write a JS function to apply Bubble Sort algorithm. 
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

/*******************************************************************************************************************************************************************************************************************/


// 25. Write a JS function that accept a list of country names as input and returns the longest country name as output. 
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

/*******************************************************************************************************************************************************************************************************************/

// 26. Write a JS function to find a substring in a given a string without repeating characters. 

/*******************************************************************************************************************************************************************************************************************/

// 27. Write a JS function that returns the longest palindrome in a given string. 

/*******************************************************************************************************************************************************************************************************************/

// 28. Write a JS program to pass a 'JS function' as parameter. 

/*******************************************************************************************************************************************************************************************************************/

// 29. Write a JS function to get the function name. 










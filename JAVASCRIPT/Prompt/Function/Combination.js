/* Write a JS function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g */

/*** Named Function ***/
const prompt = require("prompt-sync")();
// ( 1 )
/* function PossibleCom(Str){
    let CombinationArr = [];
    for (let i = 0; i < Str.length; i++) {
        for (let j = i + 1; j < Str.length + 1; j++) {
            CombinationArr.push(Str.slice(i, j));
        }
    }
    return CombinationArr.join("-");
}
let String = prompt("Enter String:");
console.log(PossibleCom(dog)); */

// ( 2 )

/* function PossibleCom(Str) {
    let CombinationArr = [];
    let temp = "";
    for (let i = 0; i < Str.length; i++) {
        for (let j = i; j < Str.length + 1; j++) {
            if (i == j) {
                CombinationArr.push(Str[i]);
            }
            else {
                temp = temp + Str[j];
            }
        }
        CombinationArr.push(temp);
    }
    return CombinationArr.join("-");
}
let String = prompt("Enter String:");
console.log(PossibleCom(String)); */

/*** Anonymous Function ***/

/* let PossibleCom = (Str) => {
    let CombinationArr = [];
    for (let i = 0; i < Str.length; i++) {
        for (let j = i + 1; j < Str.length + 1; j++) {
            CombinationArr.push(Str.slice(i, j));
        }
    }
    return CombinationArr.join("-");
}
let String = prompt("Enter String:");
console.log(PossibleCom(String)); */


/***  Two char combination ***/

/* function combination(str) {
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
} */

// let String = (prompt("Enter a value : "));

// console.log(combination("Vrushabh"));



/*** One char Add ***/
/* 
function combination(str) {

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

console.log(combination("Vrushabh"));  */


if ([1, 1, 1] == [1]) {
    console.log("insiede if");
}
else { console.log("insiede else"); }
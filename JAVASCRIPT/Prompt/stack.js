// Array in first insert , last insert , first delete,last delete 
let Arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function FirstInsert(n) {
    Arr.unshift(n);
    console.log(Arr);
}

function FirstDelete() {
    Arr.shift();
    console.log(Arr);
}

function LastInsert(k) {
    Arr.push(k);
    console.log(Arr);
}

function LastDelete() {
    Arr.pop();
    console.log(Arr);
}

const prompt = require("prompt-sync")();

console.log("...Welcome to stack...");
console.log("1. First Insert in array.");
console.log("2. Last Insert in array.");
console.log("3. First Delete in array.");
console.log("4. Last Delete in array.");

let Choise = parseInt(prompt("Enter a choise : "));

switch (Choise) {

    case 1:
        let FI = parseInt(prompt("Enter a First Insert value : "));
        FirstInsert(FI);
        break;

    case 2:
        let LI = parseInt(prompt("Enter a Last Insert value : "));
        LastInsert(LI);
        break;

    case 3:
        FirstDelete();
        break;

    case 4:
        LastDelete();
        break;

}



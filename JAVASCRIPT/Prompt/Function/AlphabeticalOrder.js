/* Write a JS function that returns a passed string with letters in alphabetical order. 
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */

/*** Named Function ***/
const prompt = require("prompt-sync")();

/* function AlphabeticalOrder(String) {
    String = String.toLowerCase();
    let Arr = [];
    for (let i = 0; i < String.length; i++) {
        Arr.push(String[i]);
        if (Arr[i] >= "a" && Arr[i] <= "z") {

        }
        else {
            return "This String Not Valid...!";
        }
    }
    return MergeSort(Arr);
}

function MergeSort(Arr) {
    if (Arr.length < 2) {
        return Arr;
    }
    let mid = Math.floor(Arr.length / 2);
    let LeftArr = Arr.slice(0, mid);
    let RightArr = Arr.slice(mid)
    return Merge(MergeSort(LeftArr), MergeSort(RightArr));
}

function Merge(LeftArr, RightArr) {
    let SortArr = [];
    while (LeftArr.length && RightArr.length) {
        if (LeftArr <= RightArr) {
            SortArr.push(LeftArr.shift());
        }
        else {
            SortArr.push(RightArr.shift());
        }
    }
    return SortArr = [...SortArr, ...LeftArr, ...RightArr];
}


let String = prompt("Enter String:");
console.log(AlphabeticalOrder(String)); */

/*** Anonumous Function ***/

/* AlphabeticalOrder = (String) => {
    String = String.toLowerCase();
    let Arr = [];
    for (let i = 0; i < String.length; i++) {
        Arr.push(String[i]);
        if (Arr[i] >= "a" && Arr[i] <= "z") {

        }
        else {
            return "This String Not Valid...!";
        }
    }
    return MergeSort(Arr);
}

MergeSort = (Arr) => {
    if (Arr.length < 2) {
        return Arr;
    }
    let mid = Math.floor(Arr.length / 2);
    let LeftArr = Arr.slice(0, mid);
    let RightArr = Arr.slice(mid)
    return Merge(MergeSort(LeftArr), MergeSort(RightArr));
}

Merge = (LeftArr, RightArr) => {
    let SortArr = [];
    while (LeftArr.length && RightArr.length) {
        if (LeftArr <= RightArr) {
            SortArr.push(LeftArr.shift());
        }
        else {
            SortArr.push(RightArr.shift());
        }
    }
    return SortArr = [...SortArr, ...LeftArr, ...RightArr];
}


let String = prompt("Enter String:");
console.log(AlphabeticalOrder(String));
 */

/*** Using sort() Function ***/
/* function AphabeticalAsendingOrder(str) {
    return str.toLowerCase().split("").sort().join(" - ");

}
console.log(AphabeticalAsendingOrder("Vrushabh")); */


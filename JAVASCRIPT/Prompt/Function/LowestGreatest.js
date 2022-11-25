/* Write a python function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. */

/***  Named Function ***/

/* function MergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let LeftArr = arr.slice(0, mid);
    let RightArr = arr.slice(mid)
    return Merge(MergeSort(LeftArr), MergeSort(RightArr));
}

function Merge(LeftArr, RightArr) {
    let SortArr = [];
    let ResultArr = [];
    while (LeftArr.length && RightArr.length) {
        if (LeftArr[0] <= RightArr[0]) {
            SortArr.push(LeftArr.shift());
        }
        else {
            SortArr.push(RightArr.shift());
        }
    }
    return [...SortArr, ...LeftArr, ...RightArr];
}

let Arr = [8, 9, 5, 7, 3, 2, 0, 14, 17];
let ResultArr = MergeSort(Arr);
console.log(ResultArr[1], ResultArr[ResultArr.length - 2]); */



/*** Anonymous Function ***/

/* MergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let LeftArr = arr.slice(0, mid);
    let RightArr = arr.slice(mid)
    return Merge(MergeSort(LeftArr), MergeSort(RightArr));
}

Merge = (LeftArr, RightArr) => {
    let SortArr = [];
    let ResultArr = [];
    while (LeftArr.length && RightArr.length) {
        if (LeftArr[0] <= RightArr[0]) {
            SortArr.push(LeftArr.shift());
        }
        else {
            SortArr.push(RightArr.shift());
        }
    }
    return [...SortArr, ...LeftArr, ...RightArr];
}

let Arr = [8, 9, 5, 7, 3, 2, 0, 14, 17];
let ResultArr = MergeSort(Arr);
console.log(ResultArr[1], ResultArr[ResultArr.length - 2]); */
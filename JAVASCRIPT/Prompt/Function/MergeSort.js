/* Merge sort */

function MergeSort(arr) {
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
    ResultArr = [...SortArr, ...LeftArr, ...RightArr];
    return ResultArr;
}

let Arr = [8, 9, 5, 7, 3, 2, 0, 14, 17];
console.log(MergeSort(Arr));
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

/* let matrix = (n) => {

    let result = [];
    for (let i = 0; i < n; i++) {
        let Arr = [];
        for (let j = 0; j < n; j++) {
            if (i == j) {
                Arr.push(1);
            }
            else {
                Arr.push(0);
            }
        }
        result.push(Arr);
    }
    return result;
}
console.log(matrix(3)); */
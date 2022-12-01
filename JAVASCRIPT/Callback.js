let sum = (number) => {

    let totalsum = 0;
    console.log(number);
    let Arr = [...String(number).split("")];
    for (let i = 0; i < Arr.length; i++) {
        totalsum = totalsum + Math.floor(Arr[i]);
    }
    return totalsum;
}

let total = (number, callback) => {
    let n = number;
    while (n > 9) {
        n = sum(n);
    }
    return n;
}
console.log(total(7069182001, sum));

/****************************** Using Arr ****************************** /
/* let sum = (number) => {

    let totalsum = 0;
    console.log(number);
    let Arr = String(number).split("").map((number) => { return Number(number) });
    for (let i = 0; i < Arr.length; i++) {
        totalsum = totalsum + Math.floor(Arr[i]);
    }
    return totalsum;
}

let total = (number, callback) => {
    let n = number;
    while (n > 9) {
        n = sum(n);
    }
    return n;
}

console.log(total(7069182001, sum)); */


/***************************Complet*********************************/
/*
let sum = (number1) => {

    let sum1 = 0;
    console.log(number1);
    while (number1 != 0) {
        sum1 = sum1 + number1 % 10;
        number1 = parseInt(number1 / 10);
    }
    return check(sum1);

}

let check = (value) => {
    // value < 10 ? return value : sum(value);

    if (value > 9) {
        return sum(value);
    }
    else {
        return value;
    }

}

let total = (number, callback) => {
    return callback(number);
}

let number = 7069182001;
console.log(total(number, sum)); */


/***************************Vrushabh*********************************/


/* let sum = (number1) => {
    let sum1 = 0;
    console.log(number1);
    while (number1 != 0) {
        sum1 = sum1 + number1 % 10;
        number1 = parseInt(number1 / 10);
    }
    return sum1;
}

let total = (number, callback) => {
    let n = callback(number);
    while (n > 9) {
        return sum(n);
    }
    return n;
}

let number = 999999999999;
console.log(total(number, sum)); */

//


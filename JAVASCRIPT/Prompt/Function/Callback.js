/* let sum = (number) => {

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
        n = callback(n);
    }
    return n;
}
console.log(total(9898989898, sum)); */

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

/*************************** Promise *********************************/
/* let sum = (number1) => {
    while (number1 > 9) {
        console.log(number1);
        let sum1 = 0;
        while (number1 != 0) {
            sum1 = sum1 + number1 % 10;
            number1 = parseInt(number1 / 10);
        }
        number1 = sum1;
    }
    return number1;
}
let total = (number, work) => {

    return new Promise((resolve, reject) => {

        if (number > 0) {
            resolve(console.log(work(number)));
        }
        else {
            reject(console.log(number));
        }
    })
}

let number = 7069182001;
total(number, sum); */


/*************************** Promise With Arr *********************************/
/* 
let sum = (number1) => {
    while (number1 > 9) {
        console.log(number1);
        let sum1 = 0;
        while (number1 != 0) {
            sum1 = sum1 + number1 % 10;
            number1 = parseInt(number1 / 10);
        }
        number1 = sum1;
    }
    return number1;
}
let total = (number, work) => {

    return new Promise((resolve, reject) => {

        if (number > 0) {
            resolve(console.log(work(number)));
        }
        else {
            reject(console.log("Enter number Wrong...!"));
        }
    })
}

let number = [7069182001, 9913653753, 9867453789, 7865479825, 6677889955, "Add"];

total(number[0], sum)
    .then(() => {
        return total(number[1], sum)
    })
    .then(() => {
        return total(number[2], sum)
    })
    .then(() => {
        return total(number[3], sum)
    })
    .then(() => {
        return total(number[4], sum)
    })
    .then(() => {
        return total(number[5], sum)
    })
    .catch(() => {
        console.log("Retry");
    })
    .finally(() => {
        console.log("Array End.....!");
    })
 */

/*************************** callback function *********************************/

/* let add = (num, callback) => {
    return callback(num + 10, true);
}
let sub = (num, callback) => {
    return callback(num - 5, true);
}
let mul = (num, callback) => {
    return callback(num * 2, true);
}
let div = (num, callback) => {
    return callback(num / 3, true);
}

add(10, (addresult, result) => {
    if (result) {
        sub(addresult, (subresult, result) => {
            if (result) {
                mul(subresult, (mulresult, result) => {
                    if (result) {
                        div(mulresult, (divresult, result) => {
                            if (result) {
                                console.log(divresult);
                            }
                        })
                    }
                })
            }
        })
    }
}) */



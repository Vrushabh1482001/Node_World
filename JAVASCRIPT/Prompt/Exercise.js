// for (let i = 1; i <= 10; i++) {
//     console.log("Hello Vrushabh");
//     if (i < 10) {
//         console.log("In for loop");
//     }
//     else {
//         console.log("Exit for loop");
//     }
// }


// let n = 5;
// let string = "";

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         string += "*";
//     }

//     string += "\n";
// }
// console.log(string);

// Output :-

// *****
// *****
// *****
// *****
// *****

// let n = 5;
// let string = "";

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         string += "*";
//     }

//     string += "\n";
// }
// console.log(string);

// Output :-

// *
// **
// ***
// ****


// let n = 5;
// let string = "";

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === n - 1) {
//             string += "*";
//         }
//         else {
//             if (j === 0 || j === n - 1) {
//                 string += "*";
//             }
//             else {
//                 string += " ";
//             }
//         }
//     }

//     string += "\n";
// }

// console.log(string);

// Outpot :-

// *****
// *   *
// *   *
// *   *
// *****

// function sum(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }
// function mul(a, b) {
//     return a * b;
// }
// function div(a, b) {
//     return a / b;
// }
// function mod(a, b) {
//     return a % b;
// }
// console.log("a + b =", sum(20, 10));
// console.log("a - b =", sub(20, 10));
// console.log("a * b =", mul(20, 10));
// console.log("a / b =", div(20, 10));
// console.log("a % b =", mod(20, 10));

// Output :-

// a + b = 30
// a - b = 10
// a * b = 200
// a / b = 2
// a % b = 0

// let student = {
//     name: "Vrushabh",
//     std: 12,
//     age: 22
// };


// 16-11-2022 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// operator(and,or,xor, + + ),string,variable(var,let,const),undefined,null,NaN

// console.log("0" == false);//true
// console.log(false == "0");//true
// console.log(false === "0");//false

// var a=1,b=2;
// // console.log(a ++ b);//error
// console.log(a + + b);// a + + b = a+(+ b) = a+b = 1+2 = 3

// 'and' & 'or' operators
//var a = 2, b = 3, c;
// console.log(a++);//2
// console.log(a++);//3
// console.log(++a);//5
//c = --a && b++; // if first condition value is 1 after it is continue
//c = --a || b++; // if first condition value is 0 after it is continue
//console.log(a, "-", b, "-", c);

// xor(^) operator-> exclusive or ^ 
// console.log(1^1);//0
// console.log(1^0);//1
// console.log(0^1);//1
// console.log(0^0);//0

// console.log(1^0^1);//0
// console.log(0^1^0);//1
// console.log(0^0^0);//0
// console.log(1^1^1);//1

// string
// var a = 10, b = 20;
// var str1 = " hello " + a + " aryan " + b + " str-1";
// var str2 = ' hello ' + b + ' aryan ' + a + ' str-2 ';
// var str3 = `hello ${a} aryan ${b}  ${"str-3"}`;
// console.log(str1);
// console.log(str2);
// console.log(str3);

// variable
// there are three types of variable declaration > var
//                                               > let
//                                               > const
// var...........
// var a = 10;
// console.log(a);//10

// console.log(a);//undefined
// var a=10;

// var a;
// console.log(a);//undefined

// let.................
// let a = 10;
// console.log(a);//10

// console.log(a);//error :-> Cannot access 'a' before initialization
// let a=10;

// let a;
// console.log(a);//undefined

// let a=10;
// console.log(a + '10');//1010
// console.log(typeof (a + '10'));//string
// console.log(a + true);//11
// console.log(typeof(a + true));//number

// let a=10;
// let b="10"+"a";
// console.log(b);//10a

// const.................

// const a=10;
// a=20;
// console.log(a);//error :-> Assignment to constant variable

// const a=10;
// a=a+10;
// console.log(a);//error :-> Assignment to constant variable

// const a=10;
// a+=10;
// console.log(a);//error :-> Assignment to constant variable

// console.log(a);//error :-> Cannot access 'a' before initialization
// const a=10

// console.log(a);
// const a;//value is mandatory for const variable declaration

// undefined, null, NaN

// console.log(undefined == undefined);//true
// console.log(undefined === undefined);//true
// console.log(null == null);//true
// console.log(null === null);//true
// console.log(NaN == NaN);//false everytime NaN give diffrent value
// console.log(NaN === NaN);//false everytime NaN give diffrent value

// console.log(null == undefined);//true
// console.log(null === undefined);//false
// console.log(null === NaN);//false
// console.log(null == NaN);//false


// 17/11/2022

// console.log(typeof 0);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof NaN);

// console.log(10*"s"); //NaN

// console.log(); //NaN

// undefined   NaN     null


// console.log(null == 0)
// console.log(undefined == 0)
// console.log(NaN == 0)

// undefined   NaN     nulls
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(undefined == NaN);

// console.log(NaN == null);
// console.log(NaN === null);

/*
            var                                             let

    var keword introduced in "ES1"                let keyword introduced in "ES6"

    var keyword allows the duplicate              let keyword wont allows the duplicate
    variables                                     variables

    variable hoisting issue raised                we can overcome variable hoisting
    with var keywors                              with let keyword

    scope rule break by var keyword               let keyword obeys the scope rule

    global polluting issue raised                 we can overcome global polluting issue
    because of var keyword                        by using let keuword

*/



// var a=10;
// console.log(a);
// var a=20
// console.log(a);

// let a=10;
// console.log(a);
// let a=20
// console.log(a);

// let a=10;
// {
//     let a=100;        
// }
// console.log(a);


//let FindSimpleInterest; //camel case


//...Array...

// let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// arr.length = 100;
// console.log(typeof arr);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);
// console.log(arr["10"]);
// arr[50] = 550;
// arr[49] = undefined;
// arr[3.1] = 60;
// console.log(arr);


// let arr = ["ten", 11, "twelve", 13, 14, "15", 16, "17"];
// console.log(arr);
// The length property of an Array object represents the number of elements in that array
// console.log(arr.length);
// arr.length = 100;
// console.log(arr);
// console.log(arr.length);
// arr[9] = undefined;
// arr[5] = undefined;
// arr[5] = 20;
// arr[3.1] = 3.1;
// arr["A"] = "a";
// console.log(arr);
// console.log(arr.length);
// console.log(arr[9]);
// arr.length = 100;
// console.log(arr);
// arr[50] = 50;
// console.log(arr.length);
// arr['50'] = "fifty";
// console.log(arr.length);
// console.log(arr);


// let arr1={"A":"a","B":"b"}
// let arr11=["A":"a","B":"b"]
// console.log(arr1);
// console.log(arr_new[-2]);

// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18];
// arr_new.length = 100;
// console.log(arr_new.length);
// arr_new.push(19);  // Last insert
// arr_new.pop();     // Last delete
// console.log(arr_new)

// arr_new.shift();   // First delete
// arr_new.unshift(10);  // First insert
// console.log(arr_new)

// splice 

/*The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 To access part of an array without modifying it, see slice().*/

// arr_new.splice(5);
// arr_new.splice(5, 1);
// arr_new.splice(-4, 2);
// arr_new.splice(-4, -2);
// arr_new.splice(4, -2);
// arr_new.splice(-3);
// arr_new.splice(5, 2, 30, 31);
// arr_new.splice(5, 2, 30, 31, 32, 33);
// arr_new.splice(0, arr_new.length, 30, 31, 32, 33);
// arr_new.splice(0, 0, 30, 31, 32, 33);
// arr_new.splice(5,30,31,32,33);
// arr_new.splice(0,5,30,31,32,33);
// arr_new.splice(5,0,30,31,32,33);
// console.log(arr_new);
// console.log(arr_new.length);


// console.log(arr_new.splice(2));

// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(arr_new.splice(3));
// console.log(arr_new.splice(3, 3));
// console.log(arr_new.splice(3, 3, 21, 22, 23));



// slice()

/*The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
where start and end represent the index of items in that array.The original array will not be modified.*/

// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// arr_new.slice(2);
// console.log(arr_new.slice(3));
// console.log(arr_new.slice(-3));
// console.log(arr_new.slice(3, 12));
// console.log(arr_new.slice(-3, 2));  // []
// console.log(arr_new.slice(-3, -5));
// console.log(arr_new.slice(-5, -3));
// let new_arr = arr_new.slice();
// console.log(new_arr);

// let arr_new = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// console.log(arr_new.at(4));

// console.log(arr_new.join());
// console.log(arr_new.join(""));
// console.log(arr_new.join("-"));
// console.log(typeof arr_new.join());


//...Function()...

//function test(n) {
//     console.log('Inside Function .... ${n}');  //Template literal
//     return n * n;
// }

// let n = test(10);
// console.log(typeof n);










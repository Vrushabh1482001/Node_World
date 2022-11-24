/*** Function ***/
// Functions are one of the fundamental building blocks in JavaScript. 
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value,but for a procedure to qualify as a function, 
// it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, 
// you must define it somewhere in the scope from which you wish to call it.

// syntax :
//    function Function_Name(Variable){
//        statemant ;
//    } // function defining

//    function_name (Parameter);

// business logical called as functions are used to reuse the business logic we have following type of functions up to "ES113"


// type of function 

// 1. Named functions
// 2.Anonymous functions
// 3.Rest perameters in functions
// 4.Default perameters in functions
// 5.Optional perameters in functions
// 6.Genrators
// 7.Constructor functions
// 8.IIFE [Immidiate Invokable functional Expressions]



// *** 1. Named Function *** //

// --> The function with the partiular name called as named function..

// (1)  Function Defination
//     (2)  Function Calling

// Syntax: -

//     function Function_name(arg1, arg2, arg3) {
//         Business logic
//     } // Function defination 

// Function_name(param 1, param 2, parm 3); // Function calling


// Example ::-

// ( 1 )

/* function Fun_One() {
    return "Hello Vrushabh";
}

console.log(Fun_One());  // Hello Vrushabh */

// ( 2 )

/* function Fun_One(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}

Fun_One("Angular", "Nodejs", "Mongodb");
Fun_One("Reactjs", "Nodejs");
Fun_One();
Fun_One("Undefined", "Nodejs");
Fun_One(null, null, null);
Fun_One(null, "   ", null);
Fun_One(null, {}, []); */

// ( 3 )

/* function Fun_One() {
    return "Hello Vrushabh";
}
function Fun_Two() {
    return Fun_One();
}
function Fun_Three() {
    return Fun_Two();
}

console.log(Fun_Three()); // Hello Vrushabh */

// ( 4 )

/* function Fun_One() {
    return "Hello Vrushabh";
}
function Fun_Two() {
    return Fun_One;
}
function Fun_Three() {
    return Fun_Two;
}

console.log(Fun_Three()()());  // Hello Vrushabh  */


// ( 5 )

/* function Fun_One(arg1, arg2, arg3) {
    console.log(arg1(), arg2(), arg3());
    //console.log(arg1, arg2, arg3); // [Function: Fun_Two] [Function: Fun_Three] [Function: Fun_Four]
}

function Fun_Two() {
    return "Hello Vrushabh 2...";
}

function Fun_Three() {
    return "Hello Vrushabh 3...";
}

function Fun_Four() {
    return "Hello Vrushabh 4...";
}


Fun_One(Fun_Two, Fun_Three, Fun_Four);  // Hello Vrushabh 2... Hello Vrushabh 3... Hello Vrushabh 4... */



// *** Anonymous Function *** //

/*  -> The Function without name called as anonymous function.
    -> Anonymous functions also called as "Arrow" functions, "Lamda" functions and "Callback" functions.
    -> we will respresent arrow functions with " => ".
    -> " => "  introduced in ES6.

    Synntax :: -

        (1) Function Defination
        (2) Function Calling


( 1 )  Var / let /const variable_name = (arg1, arge2, ... , arg N) => {
             Business Logic;
            } // Function Ddefination

        variable_name(param1, param2, ..., param N); //  Function Calling

( 2 )  console.log (()=>{}); */


// Example ::-

//  ( 1 )

/* let Fun_One = () => {
    return "Hello";
}

console.log(Fun_One()); */

// ( 2 ) Single statement

/* let Fun_One = () => "Hello";
console.log(Fun_One()); */


// ( 3 )

/* let Fun_One = () => {
    return () => {
        return () => {
            return () => {
                return "Hello";
            }
        }
    }
}

console.log(Fun_One()()()());  // Chaining Function.  */

// ( 4 )

/* let Fun_One = (str) => 'Hello ${str}';
let str = "Vrushabh";
console.log(Fun_One(str)); */

// ( 5 )

/* let Fun_One = (arg1) => {
    console.log(arg1());
}
Fun_One(() => "Hello"); */

// ( 6 )

/* let Fun_Two = () => "Hello_Fun_2";

let Fun_One = (arg1, arg2, arg3) => {
    console.log(arg1(), arg2(), arg3());
}
Fun_One(() => { return "Hello_1" }, Fun_Two, () => "Hello_3");

Fun_One(() => "Hello_1", () => "Hello_2", () => "Hello_3"); */





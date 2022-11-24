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



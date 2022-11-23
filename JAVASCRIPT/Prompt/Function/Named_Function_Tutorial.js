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


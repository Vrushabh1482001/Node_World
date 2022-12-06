// The for loop:

// for (let index=0; index < someArray.length; index++) {
//   const elem = someArray[index];
//   // ···
// }


// The for-in loop:

// for (const key in someArray) {
//   console.log(key);
// }

// The Array method .forEach():

// someArray.forEach((elem, index) => {
//   console.log(elem, index);
// });


// The for-of loop:

// for (const elem of someArray) {
//   console.log(elem);
// }

// Example

// const arr = ["a", "b", "c", "d", "e"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

/* for (let i in arr) {
    console.log(arr[i]);
} */

// With the other two constructs, forEach() and for/of, you get access to the array element itself. With forEach() you can access the array index i, with for/of you cannot.

// arr.forEach(() => { });

// arr.forEach((v, i, a) => console.log(`${i} - ${v} - ${a}`));

/* for (let i of arr) {
    console.log(i);
}
 */
// arr.test = "bad";

// console.log(arr);
// [ 'a', 'b', 'c', 'd', 'e', test: 'bad' ]

// Prints "a, b, c, bad"

// for (let i in arr) {
//     console.log(i + " - " + arr[i]);
// }

// arr.forEach((v, i, a) => console.log(`${i} - ${v} - ${a}`));
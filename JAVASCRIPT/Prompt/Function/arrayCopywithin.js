
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].copyWithin(-3));
// console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].copyWithin(2, 4, 6));
// [1, 2, 3, 3, 4]

// console.log(Math.ceil(36.50));

// const arr = [1, 2, 3];
// const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);


// console.log(Math.random() * 10);
/* const worldString = "Hello, world";
console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big());  */

// const icons = '☃★♲☃';
// console.log(icons.codePointAt(4));  
/* let paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really dog lazy?';
let searchTerm = 'dog';
console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`); */

// "Blue Whale".indexOf("Blue", -1); // returns  0
// "Blue Whale".indexOf("Blute"); // returns -1
// "Blue Whale".indexOf("Whale", 0); // returns  5
// "Blue Whale".indexOf("Whale", 5); // returns  5
// "Blue Whale".indexOf("Whale", 7); // returns -1
// "Blue Whale".indexOf(""); // returns  0
// "Blue Whale".indexOf("", 9); // returns  9
// "Blue Whale".indexOf("", 10); // returns 10
// "Blue Whale".indexOf("", 11); // returns 10


const anyString = "Brave,Brave New World";

console.log(anyString.indexOf("Brave")); // 0
console.log(anyString.lastIndexOf("Brave")); // 7

// Array

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


// Function()

//function test(n) {
//     console.log('Inside Function .... ${n}');  //Template literal
//     return n * n;
// }

// let n = test(10);
// console.log(typeof n);




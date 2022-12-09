let student0 = {
    Name: "Satasiya Vrushabh",
    Age: 22,
    Course: "Node Js",
    MobileNo: 7069182001
}
let student1 = {
    Name: "Keyur Padmani",
    Age: 22,
    Course: "Flutter",
    MobileNo: 8877665544
}
let student2 = {
    Name: "Krunal Sojitra",
    Age: 21,
    Course: "c++",
    MobileNo: 7069182001
}
let student3 = {
    Name: "Neel",
    Age: 22,
    Course: "Python",
    MobileNo: 9974099876
}
let student4 = {
    Name: "Keval",
    Age: 26,
    Course: "Data Structure",
    MobileNo: 9909045678
}

let GetDetails = function () { console.log(this) };

let GetName = function () { console.log(this.Name) };

let GetAge = function () { console.log(this.Age) };

let GetCourse = function () { console.log(this.Course) };

let GetMobileNo = function () { console.log(this.MobileNo) };

let ObjectArr = [student0, student1, student2, student3, student4]
/* for (let i of ObjectArr) {
    GetDetails.call(i);
} */

ObjectArr.map(Element => GetDetails.call(Element));

/* for (let i of ObjectArr) {
    GetName.call(i);
} */

ObjectArr.map(Element => GetName.call(Element));

/* for (let i of ObjectArr) {
    GetAge.call(i);
} */

ObjectArr.map(Element => GetAge.call(Element));

/* for (let i of ObjectArr) {

    GetCourse.call(student0);
} */

ObjectArr.map(Element => GetCourse.call(Element));

/* for (let i of ObjectArr) {
    GetMobileNo.call(student0);
}
 */
ObjectArr.map(Element => GetMobileNo.call(Element));

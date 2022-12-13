/* window.onload = function () {
    const Firstname = document.getElementById("fname");
    const LastName = document.getElementById("lname");
    const Submit = document.getElementById("submit");
    const Ans = document.getElementById("Ans");

    Submit.addEventListener('click', () => {
        console.log("Submit Clicks");
        console.log(`${Firstname}  ${LastName}`);
        Ans.value = (+Firstname.value + +LastName.value)
    })
} */

window.onload = function () {
    let Arr = [];
    const Add = document.getElementById("Add");
    const Submit = document.getElementById("submit");
    const Ans = document.getElementById("Ans");


    let counter = 1;
    let object = {};
    Submit.addEventListener('click', () => {
        object = {
            "key": counter++,
            "value": Add.value,
        }
        Arr.push(object);
        console.log(Arr);
        Ans.value = (Arr);
    })
}
window.onload = function () {
    const Fname = document.getElementById("fname").value;
    const Lname = document.getElementById("lname").value;
    const Email = document.getElementById("email").value;
    const ReEmail = document.getElementById("re-email").value;
    const Gender = document.getElementsByClassName("Gender").value;
    const Password = document.getElementById("password").value;
    const Signup = document.getElementById("Signup");


    let check = () => {
        // if (Password == 82001) {
        console.log(`Your info :  Your Name :  ${Fname}  ${Lname}`);
        console.log(`Your Email : ${Email}`);
        console.log(`Your Gender :  ${Gender}`);
        //     }
        //     else {
        //         console.log("Sorry Enter your Wrong Password.....!");
        //     }
    }
    Signup.addEventListener('click', check());
}
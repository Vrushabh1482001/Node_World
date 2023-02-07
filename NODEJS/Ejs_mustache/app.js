const express = require('express');
// const ejs = require('ejs');
const mustacheexpress = require("mustache-express");
var app = express();

app.engine("mustache", mustacheexpress());
app.set("view engine", "mustache");

// app.get("/", (req, res) => {
//     var model = { x: 1000, y: 20 };
//     res.render("index");
// });

// app.get("/login", (req, res) => {
//     let model = { uname: "qode", upwd: "qode@123" };
//     res.render("login", model);
// });

app.get("/student", (req, res) => {
    let model = {
        studentId: "S011",
        studentName: "Ramesh",
        studentMarks: 40,
        subjects: [
            { name: "math", marks: "54" },
            { name: "science", marks: "53" },
            { name: "english", marks: "54" },
        ],
    };
    res.render("student", model);
});
app.listen(5151, () => {
    console.log("Server started at port no : 5151");
});

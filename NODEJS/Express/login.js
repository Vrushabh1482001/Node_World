
const express = require("express");
login = express.Router();
login.use(express.json());


login.get("/", (req, res) => {
    res.json({ 'msg': "inside a login" })
});

// login.get("/singup", (req, res) => {
//     res.sendFile(__dirname + "/login.html");
// });

login.post("/singup", (req, res) => {
    const request = req.body;
    let id = request.id;
    let pwd = request.pwd;
    if (id == pwd) {
        const dashboard = require("./dashboard");
        login.use("/dashboard", dashboard);
    }
    else {
        const reset = require("./reset");
        login.use("/reset", reset);
    }
});

module.exports = login;


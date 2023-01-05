const express = require("express");
login = express.Router();
login.use(express.json());
login.use(express.urlencoded())


login.get("/", (req, res) => {
    res.json({ 'msg': "inside a login" })
});

login.get("/singup", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

login.post("/singup", (req, res) => {
    const request = req.body;
    let id = request.id;
    let pwd = request.pwd;
    console.log(request);
    console.log(id);
    console.log(pwd);
    if (id == pwd) {
        console.log({ "msg": "in process" });
        const dashboard = require("./dashboard");
        login.use("/", dashboard);
    }
    else {
        console.log({ "msg": "error" });
        login.use('/', (req, res, next) => {
            console.log("Redirect");
            res.redirect('/singup');
            next();
        });

    }
});

module.exports = login;


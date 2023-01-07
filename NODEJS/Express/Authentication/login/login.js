const express = require("express");
const jwtToken = require("jwt-simple");
const tokenObj = require('../Token/token');
login = express.Router();


login.get("/", (req, res) => {
    res.json({ 'msg': "inside a login" })
});

login.post("/", (req, res) => {
    const id = req.body.id;
    const pwd = req.body.pwd;
    if (id == "vrushabh" && pwd == "vrushabh123") {
        const token = jwtToken.encode({ id: id, pwd: pwd }, "skill");
        tokenObj.token = token;
        res.json({ login: "Success", token: token });
    }
    else {
        res.json({ login: "Fail" });
    }
});

module.exports = login;


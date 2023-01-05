const express = require('express');
const jwtToken = require('jwt-simple');
const tokenObj = require('../Token/token');
login = express.Router();
login.use(express.json());
login.use(express.urlencoded());

login.get("/", (req, res) => {
    res.json({ "msg": "Inside login Page....!" });
});

login.post("/", (req, res) => {
    const id = req.body.id;
    const pwd = req.body.pwd;
    if (id == "vrushabh" && pwd == "vrushabh123") {
        const token = jwtToken.encode({ id: id, pwd: pwd }, "Hello");
        tokenObj.token = token;
        res.json({ login: "Success", Token: token });
    }
    else {
        res.json({ login: "Fail" });
    }
});

module.exports = login;

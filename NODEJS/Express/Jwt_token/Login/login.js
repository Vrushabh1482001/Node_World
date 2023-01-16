const express = require('express');
const jwtToken = require('jsonwebtoken');
const tokenObj = require('../Token/token');
const fs = require("fs");
const login = express.Router();
login.use(express.json());
login.use(express.urlencoded());


login.get('/', (req, res) => {
    res.json({ msg: "Inside Login ....!" });
});

login.post('/', (req, res) => {
    const id = req.body.id;
    const pwd = req.body.pwd;
    if (id == "vrushabh" && pwd == "vrushabh123") {
        tokenObj.token = jwtToken.sign({ id: id, pwd: pwd }, 'skill', { expiresIn: '60s' });
        // tokenObj.token = jwtToken.sign({ id: id, pwd: pwd }, fs.readFile('private.key'), { algorithm: 'RS256' });
        // tokenObj.token = jwtToken.sign({ id: id, pwd: pwd }, 'skill', { algorithm: 'RS256' });
        // tokenObj.token = jwtToken.sign({ id: id, pwd: pwd }, 'skill');

        res.json({ msg: "Success to login and create token", token: tokenObj.token });
    }
    else {
        res.json({ msg: "Fail login ....!" });
    }

});


module.exports = login;
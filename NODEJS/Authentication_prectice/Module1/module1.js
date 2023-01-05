const express = require('express');
const tokenObj = require('../Token/token');
module1 = express.Router();
module1.use(express.json());
module1.use(express.urlencoded());

module1.post('/', (req, res) => {
    if (tokenObj.token == req.headers.token) {
        res.json({ msg: "inside a module1 success....!", Token: tokenObj.token });
    }
    else {
        res.json({ msg: "Fail in module1....!" });
    }
});

module.exports = module1;

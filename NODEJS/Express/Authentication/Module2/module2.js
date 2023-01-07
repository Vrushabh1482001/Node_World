const express = require('express');
const middleware = require('../Middleware/middleware')
module2 = express.Router();


module2.post('/', [middleware], (req, res) => {
    res.json({ "msg": "inside module2 success" });
});

module.exports = module2;

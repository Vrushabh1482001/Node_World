const express = require('express');
const middleware = require('../Middleware/middleware')
module3 = express.Router();


module3.post('/', [middleware], (req, res) => {
    res.json({ "msg": "inside module3 success" });
});

module.exports = module3;
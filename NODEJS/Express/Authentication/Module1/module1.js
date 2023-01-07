const express = require('express');
const middleware = require('../Middleware/middleware')
module1 = express.Router();


module1.post('/', [middleware], (req, res) => {
    res.json({ "msg": "inside module1 success" });
});

module.exports = module1;

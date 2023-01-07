const express = require('express');
const module2 = express.Router();

module2.post('/', [require('../Middleware/middleware')], (req, res) => {
    res.json({ msg: 'Module 2 connected....!' });
});

module.exports = module2;
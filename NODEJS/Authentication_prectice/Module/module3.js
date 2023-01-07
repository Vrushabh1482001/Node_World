const express = require('express');
const module3 = express.Router();

module3.post('/', [require('../Middleware/middleware')], (req, res) => {
    res.json({ msg: 'Module 3 connected....!' });
});

module.exports = module3;
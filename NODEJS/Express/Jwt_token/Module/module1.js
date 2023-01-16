const express = require('express');
const module1 = express.Router();

module1.post('/', [require('../Middleware/middleware')], (req, res) => {
    res.json({ msg: 'Module 1 connected....!' });
});

module.exports = module1;
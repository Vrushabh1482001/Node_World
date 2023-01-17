const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel');
const getData = express.Router();


getData.get('/', (req, res) => {
    User.find({}, (err, result) => {
        if (err) throw err;
        else {
            console.log(result);
        }
    });
});


module.exports = getData;
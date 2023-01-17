const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel');
const data = require('./data')
const postData = express.Router();


postData.post('/', (req, res) => {
    console.log(data.users);
    const result = User.insertMany(data.users);
    res.send(result);
});


module.exports = postData;
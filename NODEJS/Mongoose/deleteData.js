const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel');
const deleteData = express.Router();


deleteData.delete('/', (req, res) => {

    const query = req.body;
    User.deleteOne(query, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });

});


module.exports = deleteData;


// {"name" : "skillqode1"}
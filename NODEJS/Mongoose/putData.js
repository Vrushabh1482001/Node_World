const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel');
const putData = express.Router();


putData.put('/', (req, res) => {
    const select = req.body.select;
    const update = req.body.update;
    User.updateOne(select, { $set: update }, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });

});


module.exports = putData;

// {
//     "select" : {"name" : "skillqode1"},
//     "update" : {"email": "hr2@skillqode.in"}
//     } 
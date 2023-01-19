const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Users = require('../Models/usersModel');

router.use(express.json());
router.use(express.urlencoded());


router.get('/', (req, res) => {
    Users.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});

router.post('/', (req, res) => {
    Users.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });

});


module.exports = router;
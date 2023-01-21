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

router.post('/', async (req, res) => {

    let users = new Users({
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        street: req.body.street,
        apartment: req.body.apartment,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
    });

    users = await users.save();
    if (!users) return res.status(500).send("The Users cannot be created.....!");
    res.send(users);

});


router.put('/', (req, res) => {
    User.updateOne(req.body.select, { $set: req.body.update }, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });

});

router.delete('/', (req, res) => {
    User.deleteOne(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });
});

module.exports = router;
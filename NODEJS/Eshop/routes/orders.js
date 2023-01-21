const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Orders = require('../Models/ordersModel');
const Users = require('../Models/usersModel');

router.use(express.json());
router.use(express.urlencoded());


router.get('/', (req, res) => {
    Orders.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});

router.post('/', async (req, res) => {
    const user = await Users.findById(req.body.user);
    if (!user) return res.status(400).send("Invalid User");
    let orders = new Orders({
        orderiterms: req.body.orderiterms,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: req.body.totalPrice,
        user: req.body.user
    });

    orders = await orders.save();
    if (!orders) return res.status(500).send("The Order cannot be created....!");

});

router.put('/', (req, res) => {
    Orders.updateOne(req.body.select, { $set: req.body.update }, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });

});

router.delete('/', (req, res) => {
    Orders.deleteOne(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });
});

module.exports = router;
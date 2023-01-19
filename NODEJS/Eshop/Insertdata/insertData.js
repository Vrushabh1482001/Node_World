const express = require('express');
const mongoose = require('mongoose');
const insertData = express.Router();
const Users = require('../Models/usersModel');
const Products = require('../Models/productsModel');
const Category = require('../Models/categoryModel');
const Orders = require('../Models/ordersModel');
const Orderitems = require('../Models/orderitemsModel');


insertData.post('/users', (req, res) => {
    /* const data = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        street: req.body.street,
        apartment: req.body.apartment,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin
    }; */

    Users.insertOne({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        street: req.body.street,
        apartment: req.body.apartment,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin
    }, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });

});

/* insertData.post('/products', (req, res) => {s
    const result = Products.insertMany(req.body);
    res.send(result);
});


insertData.post('/category', (req, res) => {
    const result = Category.insertMany(req.body);
    res.send(result);
});

insertData.post('/orders', (req, res) => {
    const result = Orders.insertMany(req.body);
    res.send(result);
});


insertData.post('/orderitems', (req, res) => {
    const result = Orderitems.insertMany(req.body);
    res.send(result);
}); */


module.exports = insertData;
const express = require('express');
const mongoose = require('mongoose');
const insertData = express.Router();
const Users = require('../Models/usersModel');
const Products = require('../Models/productsModel');
const Category = require('../Models/categoryModel');
const Orders = require('../Models/ordersModel');
const Orderitems = require('../Models/orderitemsModel');
insertData.use(express.json());
insertData.use(express.urlencoded());

insertData.get('/', (req, res) => {
    res.json({ 'msg': "default insertdata....!" })
});


insertData.post('/users', (req, res) => {
    Users.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });

});

insertData.post('/category', (req, res) => {
    const result = Category.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });
});

insertData.post('/products', (req, res) => {
    Products.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });
});


insertData.post('/orders', (req, res) => {
    const result = Orders.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });
});


insertData.post('/orderitems', (req, res) => {
    const result = Orderitems.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });
});


module.exports = insertData;
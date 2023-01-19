const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Products = require('../Models/productsModel');

router.use(express.json());
router.use(express.urlencoded());


router.get('/', (req, res) => {
    Products.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});

router.post('/', (req, res) => {
    Products.insertMany(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.json({ "msg": "insert Success...!" });
        }
    });

});


module.exports = router;
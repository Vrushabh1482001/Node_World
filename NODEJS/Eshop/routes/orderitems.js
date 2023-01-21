const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Orderitems = require('../Models/orderitemsModel');
const Products = require('../Models/productsModel')

router.use(express.json());
router.use(express.urlencoded());


router.get('/', (req, res) => {
    Orderitems.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});

router.post('/', async (req, res) => {
    const product = await Products.findById(req.body.product);
    if (!product) return res.status(400).send("Invalide Product...!");
    let orderitems = new Orderitems({
        product: req.body.product,
        quantity: req.body.quantity
    });

    orderitems = await Orderitems.Save();
    if (!orderitems) return res.status(5000).send("The Orderitems cannot be created....!");
});


router.put('/', (req, res) => {
    Orderitems.updateOne(req.body.select, { $set: req.body.update }, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });

});

router.delete('/', (req, res) => {
    Orderitems.deleteOne(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });
});


module.exports = router;
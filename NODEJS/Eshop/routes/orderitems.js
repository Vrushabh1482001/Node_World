const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Orderitems = require('../Models/orderitemsModel');
const Products = require('../Models/productsModel')

router.use(express.json());
router.use(express.urlencoded());


router.get('/:id', async (req, res) => {
    const orderitem = await Orderitems.findById(req.params.id);
    if (!orderitem) {
        res.status(500).json({ massage: "The Orderitem with the give Id was not found....!" });
    }
    res.status(200).send(orderitem);
});

router.post('/', async (req, res) => {
    const product = await Products.findById(req.body.product);
    if (!product) return res.status(400).send("Invalide Product...!");
    let orderitems = new Orderitems({
        product: req.body.product,
        quantity: req.body.quantity
    });

    orderitems = await Orderitems.save();
    if (!orderitems) return res.status(5000).send("The Orderitems cannot be created....!");
});


router.put('/:id', async (req, res) => {
    const orderitem = await Orderitems.findByIdAndUpdate(req.params.id,
        {

            product: req.body.product,
            quantity: req.body.quantity

        }, { new: true });

    if (!orderitem) return res.status(500).send("The Orederitem cannot be Update.....!");
    res.send(orderitem);
});

router.delete('/:id', async (req, res) => {

    const orderitem = await Orderitems.findByIdAndRemove(req.params.id);

    if (!orderitem) return res.status(500).send("The Ordereitem cannot be deleted.....!");
    res.send({ massage: "The Orderitem is deleted" });
});


module.exports = router;
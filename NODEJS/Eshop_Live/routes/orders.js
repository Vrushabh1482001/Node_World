const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Orders = require('../../Eshop_Live/Models/ordersModel');
const Users = require('../../Eshop_Live/Models/usersModel');
const Orderitem = require("../../Eshop_Live/Models/orderitemsModel");

router.use(express.json());
router.use(express.urlencoded());

router.get('/', async (req, res) => {
    const orderList = await Orders.find()
        .populate("user", "name")
        .sort({ dateOrdered: -1 });
    if (!orderList) {
        res.status(500).json({ success: fales });
    }
    res.send(orderList);
});

router.get('/byid/:id', async (req, res) => {
    const order = await Orders.findById(req.params.id)
        .populate("user", "name")
        .populate({
            path: "orderitems",
            populate: {
                path: "product",
                populate: "category",
            }
        });
    if (!order) {
        res.status(500).json({ massage: "The Order with the give Id was not found....!" });
    }
    res.status(200).send(order);
});


router.post("/", async (req, res) => {
    const orderItemsIds = Promise.all(
        req.body.orderitems.map(async (orderitem) => {
            let newOrderItem = new Orderitem({
                quantity: orderitem.quantity,
                product: orderitem.product,
            });
            newOrderItem = await newOrderItem.save();
            return newOrderItem._id;
        })
    );

    const orderItemsIdsResolved = await orderItemsIds;
    const totalPrices = await Promise.all(
        orderItemsIdsResolved.map(async (orderItemId) => {
            const orderItem = await Orderitem.findById(orderItemId).populate(
                "product",
                "price"
            );
            const totalPrice = orderItem.product.price * orderItem.quantity;
            return totalPrice;
        })
    );

    const totalPrice = totalPrices.reduce((a, b) => a + b, 0);
    let order = new Orders({
        orderItems: orderItemsIdsResolved,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status,
        totalPrice: totalPrice,
        user: req.body.user,
    });

    order = await order.save();

    if (!order) return res.status(400).send("the order cannot be created!");

    res.status(200).send(order);
});

router.put('/:id', async (req, res) => {
    const order = await Orders.findByIdAndUpdate(req.params.id,
        {

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

        }, { new: true });

    if (!order) return res.status(500).send("The Order cannot be Update.....!");
    res.send(order);
});

router.delete('/:id', async (req, res) => {

    const order = await Orders.findByIdAndRemove(req.params.id);

    if (!order) return res.status(500).send("The Order cannot be deleted.....!");
    res.send({ massage: "The Order is deleted" });
});

module.exports = router;
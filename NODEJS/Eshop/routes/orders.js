const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Orders = require('../Models/ordersModel');
const Users = require('../Models/usersModel');
const Orderitem = require("../Models/orderitemsModel");

router.use(express.json());
router.use(express.urlencoded());


router.get('/:id', async (req, res) => {
    const order = await Orders.findById(req.params.id);
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

// router.post('/', async (req, res) => {
//     const user = await Users.findById(req.body.user);
//     if (!user) return res.status(400).send("Invalid User");
//     let orders = new Orders({
//         orderiterms: req.body.orderiterms,
//         shippingAddress1: req.body.shippingAddress1,
//         shippingAddress2: req.body.shippingAddress2,
//         city: req.body.city,
//         zip: req.body.zip,
//         country: req.body.country,
//         phone: req.body.phone,
//         status: req.body.status,
//         totalPrice: req.body.totalPrice,
//         user: req.body.user
//     });

//     orders = await orders.save();
//     if (!orders) return res.status(500).send("The Order cannot be created....!");

// });

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
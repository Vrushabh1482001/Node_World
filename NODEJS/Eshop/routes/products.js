const express = require('express');
const mongoose = require('mongoose');
const Category = require('../Models/categoryModel');
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

router.post('/', async (req, res) => {
    const category = await Category.findById(req.body.category);
    if (!category) return res.status(400).send("Invalid Category");
    let products = new Products({

        name: req.body.name,
        description: req.body.description,
        richdescription: req.body.richdescription,
        image: "ImagePath",
        images: "ImagesPath",
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        isFeatured: req.body.isFeatured,
        dataCreated: req.body.dataCreated,

    });

    products = await products.save();
    if (!products) return res.status(500).send("The product cannot be created.....!")
    res.send(products);

});

router.put('/', (req, res) => {
    Products.updateOne(req.body.select, { $set: req.body.update }, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });

});

router.delete('/', (req, res) => {
    Products.deleteOne(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });
});


module.exports = router;
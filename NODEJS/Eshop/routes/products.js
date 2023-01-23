const express = require('express');
const mongoose = require('mongoose');
const Category = require('../Models/categoryModel');
const router = express.Router();
const Products = require('../Models/productsModel');

router.use(express.json());
router.use(express.urlencoded());


router.get('/:id', async (req, res) => {
    const product = await Products.findById(req.params.id);
    if (!product) {
        res.status(500).json({ massage: "The Product with the give Id was not found....!" });
    }
    res.status(200).send(product);
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

router.put('/:id', async (req, res) => {
    const product = await Products.findByIdAndUpdate(req.params.id,
        {
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

        }, { new: true });

    if (!product) return res.status(500).send("The Product cannot be Update.....!");
    res.send(product);
});

router.delete('/:id', async (req, res) => {

    const product = await Products.findByIdAndRemove(req.params.id);

    if (!product) return res.status(500).send("The Products cannot be deleted.....!");
    res.send({ massage: "The Product is deleted" });
});


module.exports = router;
const express = require('express');
const mongoose = require('mongoose');
const Category = require('../Models/categoryModel');
const router = express.Router();
const Products = require('../Models/productsModel');
const multer = require("multer");
const path = require("path");

router.use(express.json());
router.use(express.urlencoded());

//Get Data
router.get('/', async (req, res) => {
    const productList = await Products.find()
        .populate("name", "category")
        .sort({ category: 1 });
    if (!productList) {
        res.status(500).json({ success: fales });
    }
    res.send(productList);
});

// Get Data By id
router.get('/:id', async (req, res) => {
    const product = await Products.findById(req.params.id);
    if (!product) {
        res.status(500).json({ massage: "The Product with the give Id was not found....!" });
    }
    res.status(200).send(product);
});


// Image folder
const imageStorage = multer.diskStorage({
    destination: "images/products",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

// Image upload
const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error("Please upload a Image"));
        }
        cb(undefined, true);
    },
});


// insert data
router.post('/', async (req, res) => {
    const category = await Category.findById(req.body.category);
    if (!category) return res.status(400).send("Invalid Category");
    let products = new Products({

        name: req.body.name,
        description: req.body.description,
        richdescription: req.body.richdescription,
        image: imageUpload.single("image"),
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


// Update Data
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

// Delete Data
router.delete('/:id', async (req, res) => {

    const product = await Products.findByIdAndRemove(req.params.id);

    if (!product) return res.status(500).send("The Products cannot be deleted.....!");
    res.send({ massage: "The Product is deleted" });
});


module.exports = router;
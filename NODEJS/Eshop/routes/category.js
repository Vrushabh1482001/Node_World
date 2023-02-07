const express = require('express');
const mongoose = require('mongoose');
const Category = require('../Models/categoryModel');
const router = express.Router();
const multer = require("multer");
const path = require("path");

router.use(express.json());
router.use(express.urlencoded());


// Get Data
router.get('/', async (req, res) => {
    const categoryList = await Category.find()
        .populate("name")
        .sort({ name: -1 });
    if (!categoryList) {
        res.status(500).json({ success: fales });
    }
    res.send(categoryList);
});

// Get Data By id
router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        res.status(500).json({ massage: "The Category with the give Id was not found....!" });
    }
    res.status(200).send(category);
});

// Image folder
const imageStorage = multer.diskStorage({
    destination: "images/category",
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

// Insert Data
router.post('/', async (req, res) => {
    let category = new Category({
        name: req.body.name,
        color: req.body.color,
        icon: req.body.icon,
        image: imageUpload.single("image")
    });

    category = await category.save();
    if (!category) return res.status(500).send("The Users cannot be created.....!");
    res.send(category);

});

// Update Data
router.put('/:id', async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id,
        {

            name: req.body.name,
            color: req.body.color,
            icon: req.body.icon,
            image: imageUpload.single("image")

        }, { new: true });

    if (!category) return res.status(500).send("The category cannot be Update.....!");
    res.send(category);
});

// Delete Data
router.delete('/:id', async (req, res) => {

    const category = await Category.findByIdAndRemove(req.params.id);

    if (!category) return res.status(500).send("The category cannot be deleted.....!");
    res.send({ massage: "The category is deleted" });
});

module.exports = router;
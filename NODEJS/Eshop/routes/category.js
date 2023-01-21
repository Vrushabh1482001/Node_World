const express = require('express');
const mongoose = require('mongoose');
const Category = require('../Models/categoryModel');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded());


router.get('/', (req, res) => {
    Category.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});

router.post('/', async (req, res) => {
    let category = new Category({
        name: req.body.name,
        color: req.body.color,
        icon: req.body.icon,
        image: req.body.image

    });

    category = await category.save();
    if (!category) return res.status(500).send("The Users cannot be created.....!");
    res.send(category);

});
router.put('/', (req, res) => {
    Category.updateOne(req.body.select, { $set: req.body.update }, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });

});

router.delete('/', (req, res) => {
    Category.deleteOne(req.body, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        };
    });
});


module.exports = router;
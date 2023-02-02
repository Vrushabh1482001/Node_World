const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded());

// getdata
router.get("/", (req, res) => {
    connection.query("select * from Products", (err, rows) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ Data: rows });
        }
    });
});

//getdata by id
router.get("/:id", (req, res) => {
    connection.query("select * from Poducts where id =" + req.params.id, (err, rows) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ Data: rows });
        }
    });
});


//postdata
router.post("/", (req, res) => {
    let { name, price, category } = req.body;
    let error = false;

    if (name.length === 0 || price.length === 0 || category.length === 0) {
        error = true;
        res.json("error", "Please enter name and price ,category");
    }
    //if no error
    if (!error) {
        var form_data = {
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

        }
    }
    connection.query("insert into Products set ?", form_data, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Product successfully added" });
        }
    });
});

//Update

router.put("/:id", (req, res) => {
    let { name, price, category } = req.body;
    let error = false;

    if (name.length === 0 || price.length === 0 || category.length === 0) {
        error = true;
        res.json("error", "Please enter name and price , category");
    }
    //if no error
    if (!error) {
        var form_data = {
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
        }
    }
    connection.query("update Products set ? where id = " + id, form_data, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Product successfully Update" });
        }
    });
});

//Delete

router.delete("/:id", (req, res) => {
    let id = req.params.id

    connection.query("delete from Products where id = " + id, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Product successfully delete" });
        }
    });
});


module.exports = router;
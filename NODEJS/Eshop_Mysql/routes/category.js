const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded());

// getdata
router.get("/", (req, res) => {
    connection.query("select * from Category", (err, rows) => {
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
    connection.query("select * from Category where id =" + req.params.id, (err, rows) => {
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
    let { name } = req.body;
    let error = false;

    if (name.length === 0) {
        error = true;
        res.json("error", "Please enter name");
    }
    //if no error
    if (!error) {
        var form_data = {
            name: req.body.name,
            color: req.body.color,
            icon: req.body.icon,
            image: req.body.image

        }
    }
    connection.query("insert into Category set ?", form_data, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Category successfully added" });
        }
    });
});

//Update

router.put("/:id", (req, res) => {
    let { name } = req.body;
    let error = false;

    if (name.length === 0) {
        error = true;
        res.json("error", "Please enter name and price , category");
    }
    //if no error
    if (!error) {
        var form_data = {
            name: req.body.name,
            color: req.body.color,
            icon: req.body.icon,
            image: req.body.image
        }
    }
    connection.query("update Category set ? where id = " + id, form_data, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Category successfully Update" });
        }
    });
});

//Delete

router.delete("/:id", (req, res) => {
    let id = req.params.id

    connection.query("delete from Category where id = " + id, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Category successfully delete" });
        }
    });
});


module.exports = router;
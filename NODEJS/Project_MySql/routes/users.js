const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded());

// getdata
router.get("/", (req, res) => {
    connection.query("select * from users", (err, rows) => {
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
    let { name, email, position } = req.body;
    let error = false;

    if (name.length === 0 || email.length === 0 || position === 0) {
        error = true;
        res.json("error", "Please enter name and email and position");
    }
    //if no error
    if (!error) {
        var form_data = {
            name: name,
            email: email,
            position: position
        }
    }
    connection.query("insert into users set ?", form_data, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "User successfully added" });
        }
    });
});

//Update

router.put("/:id", (req, res) => {
    let id = req.params.id
    let { name, email, position } = req.body;
    let error = false;

    if (name.length === 0 || email.length === 0 || position === 0) {
        error = true;
        res.json("error", "Please enter name and email and position");
    }
    //if no error
    if (!error) {
        var form_data = {
            name: name,
            email: email,
            position: position
        }
    }
    connection.query("update users set ? where id = " + id, form_data, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "User successfully Update" });
        }
    });
});

//Delete

router.delete("/:id", (req, res) => {
    let id = req.params.id

    connection.query("delete from users where id = " + id, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "User successfully delete" });
        }
    });
});


module.exports = router;
const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
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

//getdata by id
router.get("/:id", (req, res) => {
    connection.query("select * from users where id =" + req.params.id, (err, rows) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ Data: rows });
        }
    });
});

//login
router.post("/login", async (req, res) => {
    const secret = process.env.SECRET;
    const user = await connection.query("select * from users where email = " + req.body.email);
    if (!user) {
        return res.status(400).send("The user not found");
    }
    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin,
            },
            secret, { expiresIn: "1d" }
        );
        res.status(200).send({ user: user.email, token: token });
    }
    else {
        res.status(400).send("Password is worng....!");
    }
});

//postdata
router.post("/register", (req, res) => {
    let { name, email } = req.body;
    let error = false;

    if (name.length === 0 || email.length === 0) {
        error = true;
        res.json("error", "Please enter name and email");
    }
    //if no error
    if (!error) {
        var form_data = {
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
            street: req.body.street,
            apartment: req.body.apartment,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,

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
    let { name, email } = req.body;
    let error = false;

    if (name.length === 0 || email.length === 0) {
        error = true;
        res.json("error", "Please enter name and email");
    }
    //if no error
    if (!error) {
        var form_data = {
            name: req.body.name,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.passwordHash, 10),
            street: req.body.street,
            apartment: req.body.apartment,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
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
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Users = require('../Models/usersModel');

router.use(express.json());
router.use(express.urlencoded());

/* router.get('/', async (req, res) => {
    const userslist = await Users.find();

    if (method) Response < any, Record < String, any >, number > .status(code : renumber): Response < any, Record < String, any >, number > Set status code.res.status(200).send(userslist);
});
 */

router.get('/:id', async (req, res) => {
    const user = await Users.findById(req.params.id);
    if (!user) {
        res.status(500).json({ massage: "The User with the give Id was not found....!" });
    }
    res.status(200).send(user);
});

router.post('/', async (req, res) => {

    let user = new Users({
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        street: req.body.street,
        apartment: req.body.apartment,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
    });

    user = await user.save();
    if (!user) return res.status(500).send("The Users cannot be created.....!");
    res.send(user);

});


router.put('/:id', async (req, res) => {
    const user = await Users.findByIdAndUpdate(req.params.id,
        {

            name: req.body.name,
            email: req.body.email,
            passwordHash: req.body.passwordHash,
            street: req.body.street,
            apartment: req.body.apartment,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,

        }, { new: true });

    if (!user) return res.status(500).send("The Users cannot be Update.....!");
    res.send(user);
});

router.delete('/:id', async (req, res) => {

    const user = await Users.findByIdAndRemove(req.params.id);

    if (!user) return res.status(500).send("The Users cannot be deleted.....!");
    res.send({ massage: "The User is deleted" });
});

module.exports = router;


// Promise

/* router.delete('/:id', (req, res) => {
    Users.findByIdAndRemove(req.params.id)
        .then((user) => {
            if (user) {
                return res.status(200).json({ success: true, massage: "The User is deleted....!" })
            }
            else {
                return res.status(404).json({ success: false, massage: "The User is not found....!" })
            }
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err });
        })
}); */


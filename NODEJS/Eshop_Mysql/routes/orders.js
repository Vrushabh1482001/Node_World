const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded());

// getdata
router.get("/", (req, res) => {
    connection.query("select * from Orders", (err, rows) => {
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
router.post("/", async (req, res) => {

    const orderItemsIds = Promise.all(
        req.body.orderitems.map(async (orderitem) => {
            connection.query("insert into Orderitems set ?", orderitem, (err, result) => {
                if (err) {
                    res.json({ error: err })
                }
                else {
                    res.json({ success: "Orderitem successfully added" });
                }
            });

            return connection.query("select id from Orderitems");
        })
    );

    const orderItemsIdsResolved = await orderItemsIds;
    const totalPrices = await Promise.all(
        orderItemsIdsResolved.map(async (orderItemId) => {
            const orderItem = {
                price: connection.query("select p.price from  Users u , Category c, Products p, Orders o , Orderitems oi, where  p.category = c.id and o.user = u.id and oi.product = p.id and p.id = oi.product and o.id = ?  group by u.id" + orderItemId),
                quantity: connection.query("select quantiy from Orderitems where id =" + orderItemId)
            }
            const totalPrice = orderItem.price * orderItem.quantity;
            return totalPrice;
        })
    );

    const totalPrice = totalPrices.reduce((a, b) => a + b, 0);

    let { name, shippingAddress1, user, totalPrice1 } = req.body;
    let error = false;

    if (name.length === 0 || shippingAddress1.length === 0 || user.length === 0 || totalPrice1.length === 0) {
        error = true;
        res.json("error", "Please enter name and shippingAddress1,user,totalPrice");
    }
    //if no error
    if (!error) {
        var form_data = {
            orderItems: orderItemsIdsResolved,
            shippingAddress1: req.body.shippingAddress1,
            shippingAddress2: req.body.shippingAddress2,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            status: req.body.status,
            totalPrice: totalPrice,
            user: req.body.user,

        }
    }
    connection.query("insert into Orders set ?", form_data, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Order successfully added" });
        }
    });
});

//Update

router.put("/:id", (req, res) => {
    let { name, shippingAddress1, user, totalPrice1 } = req.body;
    let error = false;

    if (name.length === 0 || shippingAddress1.length === 0 || user.length === 0 || totalPrice1.length === 0) {
        error = true;
        res.json("error", "Please enter name and shippingAddress1,user,totalPrice");
    }
    //if no error
    if (!error) {
        var form_data = {
            orderItems: orderItemsIdsResolved,
            shippingAddress1: req.body.shippingAddress1,
            shippingAddress2: req.body.shippingAddress2,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            status: req.body.status,
            totalPrice: totalPrice,
            user: req.body.user,
        }
    }
    connection.query("update Orders set ? where id = " + id, form_data, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Order successfully Update" });
        }
    });
});

//Delete

router.delete("/:id", (req, res) => {
    let id = req.params.id

    connection.query("delete from Orders where id = " + id, (err, result) => {
        if (err) {
            res.json({ error: err })
        }
        else {
            res.json({ success: "Order successfully delete" });
        }
    });
});


module.exports = router;
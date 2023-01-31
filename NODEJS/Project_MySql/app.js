const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
require("dotenv/config");
const app = express();
const PORT = process.env.PORT;

//cors
app.use(cors());
app.options("*", cors());

//json
app.use(express.json());
app.use(express.urlencoded());

//Default
app.get('/', (req, res) => {
    res.json({ 'msg': "default" });
});



// database connect
const connection = mysql.createConnection({
    host: "127.0.01",
    user: "root",
    password: "admin@123",
    // database: "Vrushabh",
    // host: "localhost",
    // user: "root",
    // database: "Vrushabh",
    port: 3306
});
connection.connect(function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log("databases connected successfully");
    }
});

// // getdata
// app.use('/getusers', require('./routes/users'));
// app.use('/getcategory', require('./routes/category'));
// app.use('/getproducts', require('./routes/products'));
// app.use('/getorders', require('./routes/orders'));

// //Postdata
// app.use('/postusers', require('./routes/users'));
// app.use('/postcategory', require('./routes/category'));
// app.use('/postproducts', require('./routes/products'));
// app.use('/postorders', require('./routes/orders'));


// //updatedata
// app.use('/updateusers', require('./routes/users'));
// app.use('/updatecategory', require('./routes/category'));
// app.use('/updateproducts', require('./routes/products'));
// app.use('/updateorders', require('./routes/orders'));


// //deletedata
// app.use('/deleteusers', require('./routes/users'));
// app.use('/deletecategory', require('./routes/category'));
// app.use('/deleteproducts', require('./routes/products'));
// app.use('/deleteorders', require('./routes/orders'));


// // login
// app.use('/user', require('./routes/users'));

//server Listen
app.listen(PORT, () => {
    console.log(`Server listening Port : ${PORT}`);
});
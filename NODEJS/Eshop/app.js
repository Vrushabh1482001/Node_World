const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require("cors");
const app = express();
// const authJwt = require("./Helpers/jwt");
require("dotenv/config");
const PORT = process.env.PORT

//cors
app.use(cors());
app.options("*", cors());

//strictQuery
mongoose.pluralize(null);
mongoose.set("strictQuery", true);
app.use(morgan('tiny'))

//json
app.use(express.json());
app.use(express.urlencoded());

// Authentication 
// app.use(authJwt);

//Default
app.get('/', (req, res) => {
    res.json({ 'msg': "default" });
});



// database connect
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    });

// getdata
app.use('/getusers', require('./routes/users'));
app.use('/getcategory', require('./routes/category'));
app.use('/getproducts', require('./routes/products'));
app.use('/getorders', require('./routes/orders'));
app.use('/getorderitems', require('./routes/orderitems'));

//Postdata
app.use('/postusers', require('./routes/users'));
app.use('/postcategory', require('./routes/category'));
app.use('/postproducts', require('./routes/products'));
app.use('/postorders', require('./routes/orders'));
app.use('/postorderitems', require('./routes/orderitems'));

//updatedata
app.use('/updateusers', require('./routes/users'));
app.use('/updatecategory', require('./routes/category'));
app.use('/updateproducts', require('./routes/products'));
app.use('/updateorders', require('./routes/orders'));
app.use('/updateorderitems', require('./routes/orderitems'));

//deletedata
app.use('/deleteusers', require('./routes/users'));
app.use('/deletecategory', require('./routes/category'));
app.use('/deleteproducts', require('./routes/products'));
app.use('/deleteorders', require('./routes/orders'));
app.use('/deleteorderitems', require('./routes/orderitems'));

// login
app.use('/user', require('./routes/users'));

//server Listen
app.listen(PORT, () => {
    console.log(`Server listening Port : ${PORT}`);
})
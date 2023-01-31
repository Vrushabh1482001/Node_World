const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require("cors");
const app = express();
const authJwt = require("./Helpers/jwt");
require("dotenv/config");
const errorHandler = require("./Helpers/error-handler");
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
app.use(authJwt());
app.use(errorHandler);

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

// user
app.use('/users', require('./routes/users'));

//category
app.use('/category', require('./routes/category'));

//Products
app.use('/products', require('./routes/products'));

//Orders
app.use('/orders', require('./routes/orders'));


//server Listen
app.listen(PORT, () => {
    console.log(`Server listening Port : ${PORT}`);
})
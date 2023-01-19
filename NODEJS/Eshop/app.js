const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require("cors");
const app = express();
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

//Default
app.get('/', (req, res) => {
    res.json({ 'msg': "default" });
});

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    });

app.use('/getusers', require('./routes/users'));
app.use('/getcategory', require('./routes/category'));
app.use('/getproducts', require('./routes/products'));
app.use('/getorders', require('./routes/orders'));
app.use('/getorderitems', require('./routes/orderitems'));

app.use('/postusers', require('./routes/users'));
app.use('/postcategory', require('./routes/category'));
app.use('/postproducts', require('./routes/products'));
app.use('/postorders', require('./routes/orders'));
app.use('/postorderitems', require('./routes/orderitems'));

app.listen(PORT, () => {
    console.log(`Server listening Port : ${PORT}`);
})
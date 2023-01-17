const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const data = require('./data');
const User = require('./userModel');
const app = express();
const port = 3300;
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/MongooseDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    });
/* 
mongoose.connect('mongodb+srv://admin:admin@cluster0.hqhlmez.mongodb.net/MongooseDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    }); */



app.post('/insert_records', (req, res) => {
    console.log(data.users);
    const result = User.insertMany(data.users);
    res.send(result);
});



app.use('/getdata', require('./getData'));


app.listen(port, () => {
    console.log(`Server listening Port : ${port}`);
});

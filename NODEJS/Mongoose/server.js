const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const data = require('./data');
const User = require('./userModel');
const app = express();
const port = 3300;
app.use(express.json());
app.use(express.urlencoded());

/* mongoose.connect('mongodb://localhost:27017/MongooseDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    }); */

mongoose.connect('mongodb+srv://admin:admin@cluster0.hqhlmez.mongodb.net/MongooseDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    });



/*  app.get('/find_data', (req, res) => {
     User.find({}, (err, result) => {
         if (err) throw err;
         else {
             res.send(result);
         }
     })
 });


app.post('/insert_records', (req, res) => {
 console.log(data.users);
 const result = User.insertMany(data.users);
 res.send(result);
});


app.put('/update_data', (req, res) => {
 User.updateOne({ name: "skillqode1" }, { $set: { email: "hr2@skillqode.in" } }, (err, result1) => {
     if (err) throw err;
     else {
         res.send(result1);
     };
 });

});

app.delete('/delete_data', (req, res) => {
 User.deleteOne({ name: "skillqode1" }, (err, result1) => {
     if (err) throw err;
     else {
         res.send(result1);
     };
 });

});
*/




app.use('/find_data', require('./getData'));
app.use('/insert_data', require('./postData'));
app.use('/update_data', require('./putData'));
app.use('/delete_data', require('./deleteData'));


app.listen(port, () => {
    console.log(`Server listening Port : ${port}`);
});

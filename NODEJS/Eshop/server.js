const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3300;
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.json({ 'msg': "default" });
});

mongoose.connect('mongodb+srv://admin:admin@cluster0.hqhlmez.mongodb.net/Eshop?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    });


app.use('/insertdata', require('./Insertdata/insertData'));

app.listen(PORT, () => {
    console.log(`Server listening Port : ${PORT}`);
})
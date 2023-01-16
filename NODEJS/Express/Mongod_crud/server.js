const express = require('express');
const app = express();
const port = 5050;
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.json({ msg: "Defult server....!" });
});

app.use('/getdata', require('./Getdata/getData'));
app.use('/postdata', require('./Postdata/postData'));
app.use('/putdata', require('./Putdata/putData'));
app.use('/deletedata', require('./Deletedata/deleteData'));


app.listen(port, () => {
    console.log(`Server listening Port : ${port}`);
});

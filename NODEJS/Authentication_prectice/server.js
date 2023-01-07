const express = require('express');
const app = express();
const port = 5050;
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.json({ msg: "Defult server....!" });
});

app.use('/login', require('./Login/login'));

app.use('/module1', require('./Module/module1'));
app.use('/module2', require('./Module/module2'));
app.use('/module3', require('./Module/module3'));

app.listen(port, () => {
    console.log(`Server listening Port : ${port}`);
});

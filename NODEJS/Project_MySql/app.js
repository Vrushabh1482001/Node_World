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
    database: "Vrushabh",
    port: 3306
});
connection.connect(function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log("databases connected successfully");
    }
});


app.use("/users", require("./routes/users"));



//server Listen
app.listen(PORT, () => {
    console.log(`Server listening Port : ${PORT}`);
});
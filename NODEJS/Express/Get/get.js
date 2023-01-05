const express = require("express");
const app = express();
const PORT = 5050;
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "Defult" });
});

const login = require("./getlogin");
app.use("/getlogin", getlogin);


// http://localhost:5050/singup?uname=skill&upwd=qode
// app.get("/singup", (req, res) => {
//     let query = req.query;
//     console.log(query);
//     console.log(query.uname);
//     console.log(query.upwd);
//     res.json({ "username": "id", "password": "upwd" });
// });

// app.get("/singup/:id/:upwd", (req, res) => {
//     let data = req.params
//     console.log(data);
//     console.log(data.id);
//     console.log(data.upwd);
//     res.json({ "username": "id", "password": "upwd" });
// });

app.listen(5050, () => {
    console.log(`server listening port ${PORT}`)
});
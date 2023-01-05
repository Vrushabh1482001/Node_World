const express = require("express");
getlogin = express.Router();
getlogin.use(express.json());
getlogin.use(express.urlencoded())


getlogin.get("/", (req, res) => {
    res.json({ 'msg': "inside a login" })
});

// http://localhost:5050/login/singup?id=skill&upwd=qode
getlogin.get("/singup", (req, res) => {
    let query = req.query;
    console.log(query);
    console.log(query.uname);
    console.log(query.upwd);
    res.json({ "username": "id", "password": "upwd" });
});



// getlogin.get("/singup/:id/:upwd", (req, res) => {
//     let data = req.params
//     console.log(data);
//     console.log(data.id);
//     console.log(data.upwd);
//     res.json({ "username": "id", "password": "upwd" });
// });

module.exports = getlogin;


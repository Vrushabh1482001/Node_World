const express = require('express');
const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
    res.json({ "msg": "Welcome server" });
})

const login = require("./Login/login");
app.use("/login", login);

const module1 = require("./Module1/module1");
app.use("/module1", module1);


app.listen(PORT, () => {
    console.log(`server conected ${PORT}`);
});
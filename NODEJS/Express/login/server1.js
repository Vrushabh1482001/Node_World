const express = require("express");
const app = express();
const PORT = 5050;
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "Defult" });
});

const login = require("./login");
app.use("/login", login);

app.listen(5050, () => {
    console.log(`server listening port ${PORT}`)
});
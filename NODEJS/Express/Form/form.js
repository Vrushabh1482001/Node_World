const express = require("express");
const app = express();
const PORT = 5550;
let i = 1;
app.use(express.json());
app.use(express.urlencoded());

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/form.html");
});
app.post("/login", (req, res) => {
    const request = req.body;
    console.log(`${i++} : `, request);
});
app.listen(PORT, () => {
    console.log(`server listening port ${PORT}`);
});
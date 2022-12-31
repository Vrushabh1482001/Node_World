const express = require("express");
const app = express();
const PORT = 5050;
let i = 1;
app.get("/", (req, res) => {
    res.json({ msg: "Hello Vrushabh" });
    console.log(`${i++} : Time Refresh`);
});
app.listen(5050, () => {
    console.log(`server listening port ${PORT}`)
});
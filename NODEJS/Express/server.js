const express = require("express");
const app = express();
const PORT = 5050;
let i = 1
// app.get("/", (req, res) => {
//     res.json({ msg: "hello" });
//     console.log("hello");
// })
app.get("/login", (req, res) => {
    res.json({ msg: "login get" });
    console.log(`${i++}`);
})
/* app.post("/login", (req, res) => {
    res.json({ msg: "login post" });
    console.log(`${i++}`);
}) */

app.listen(PORT, () => {
    console.log(`server listening port ${PORT}`);
});

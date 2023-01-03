const express = require("express");
const reset = express.Router();
reset.use(express.json());

reset.get("/", (req, res) => {
    res.json({ msg: "reset" });

});
module.exports = reset;
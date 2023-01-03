const express = require("express");
const dashboard = express.Router();
dashboard.use(express.json());

dashboard.get("/", (req, res) => {
    res.json({ msg: "dashborad" });

});

module.exports = dashboard;
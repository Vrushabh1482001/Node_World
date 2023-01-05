const express = require("express");
dashboard = express.Router();

dashboard.use(express.json());
dashboard.use(express.urlencoded());

dashboard.get("/", (req, res) => {
    console.log("you in dashboard");
    res.json({ "msg": "you are in dashboard" });
});

module.exports = dashboard;
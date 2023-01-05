const express = require("express");
const tokenObj = require("../Token/token");
module3 = express.Router()

module3.get("/",(req,res)=>{
    const headToken = req.headers.token;
    if(headToken == tokenObj.token)
    {
        res.json({"msg":"inside module3 success","token":tokenObj.token});
    }
    else
    {
        res.json({"msg":"fail in module3"});
    }
});

module.exports = module3;
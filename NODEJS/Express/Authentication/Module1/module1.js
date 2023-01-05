const express = require("express");
const tokenObj = require("../Token/token");
module1 = express.Router()

module1.get("/",(req,res)=>{
    const headToken = req.headers.token;
    if(headToken == tokenObj.token)
    {
        res.json({"msg":"inside module1 success","token":tokenObj.token});
    }
    else
    {
        res.json({"msg":"fail in module1"});
    }
});

module.exports = module1;
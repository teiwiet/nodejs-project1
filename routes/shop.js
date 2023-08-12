const { resolve4 } = require("dns");
const express = require("express");
const routes = express.Router();
const path = require("path");

routes.get("/",(req,res,next)=>{
    res.render("shop");
})

module.exports = routes;
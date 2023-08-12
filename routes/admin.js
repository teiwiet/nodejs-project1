const express = require("express");
const routes = express.Router();
const path = require("path");

routes.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"..","views","add-product.html"))
})

routes.post("/add-product",(req,res,next)=>{
    res.redirect("/");
    console.log(req.body);
})

module.exports = routes;
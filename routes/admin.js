const express = require("express");
const routes = express.Router();
const path = require("path");


const product = [];
routes.get("/add-product",(req,res,next)=>{
    res.render("add-product",{Title : "admin add product page"});
})
routes.post("/add-product",(req,res,next)=>{
    product.push({title :  req.body.title});
    res.redirect("/");
})
exports.routes = routes;
exports.product = product;
const express = require("express");
const routes = express.Router();
const path = require("path");
const adminProduct = require("./admin") 
const product = adminProduct.product;
routes.get("/",(req,res,next)=>{
    res.render("shop",{Title: "Gấu Bông Hưng Nhung pug",prods : product});
})


module.exports = routes;
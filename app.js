const http = require('http');
const express = require("express");
const path = require("path");
const app = express();
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")
app.use(express.static(path.join(__dirname,"public")));

app.use(shopRoutes)
app.use("/admin",adminRoutes)

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","error.html"))
})
app.listen(8080)
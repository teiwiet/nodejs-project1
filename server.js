const express = require("express");
const app = express();
const path = require("path");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
app.use(express.static(path.join(__dirname,"public")))
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","error.html"));
})

app.listen(8080);
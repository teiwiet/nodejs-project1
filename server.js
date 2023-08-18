const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("views","views");
app.set("view engine","pug");
const path = require("path");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/admin",adminRoutes.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","error.html"));
})

app.listen(8080);
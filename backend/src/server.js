const express = require("express");
const mongoose = require("mongoose");
const connect = require("./config/db.js");
const ProductController = require("../src/controllers/product.controller");

const app = express();


app.use(express.json());

app.use("/product" , ProductController)



app.listen(2345, async function(){
    await connect()
    console.log("listning on the port 2345")
});
const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
// const route = require('./route/user')
const authRoute = require('./route/auth')
const productRoute = require('./route/product')
const cartRoute = require('./route/cart')
app.use(express.json());
const mongoose = require('mongoose');
//cookie parser 
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Mongoose is connected"))
.catch(err => console.log("error", err))
// app.use(route) 
app.use(authRoute)
app.use(productRoute)
app.use(cartRoute)

  
  

app.listen(port, () => { 
    console.log("app is running");
}) 





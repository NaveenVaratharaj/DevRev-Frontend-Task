require('dotenv').config(); //DOTENV for security
const ejs = require("ejs");
const express = require("express");

const app = express();

//View engine setup and serving static files
app.set('view engine', ejs);
app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.render("home.ejs");
})

app.listen(process.env.PORT_NUMBER, (req,res) =>{
    console.log(`App started at the port ${process.env.PORT_NUMBER}` )
})
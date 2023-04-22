require('dotenv').config(); //DOTENV for security
const ejs = require("ejs");
const express = require("express");
const path = require('path');

const app = express();

//View engine setup and serving static files
// app.set('view engine', ejs);
app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname+'/files/index.html'))
})

app.get("/findbooks", (req,res) =>{
    res.sendFile(path.join(__dirname+'/files/main.html'))
})

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname+'/files/login.html'))
})

app.get('/signup', (req,res) =>{
    res.sendFile(path.join(__dirname+'/files/signup.html'))
})

app.listen(4000, (req,res) =>{
    console.log(`App started at the port 4000` )
})

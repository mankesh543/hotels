//postman pe ja l jab https://localhost:3000/ likho to ye server ka response dega post me daal k

const express = require("express"); // ye import express from 'express'
const app = express(); // ye app banata hai jo express ka instance hai app k pass saari wo funcationality hai wo express provide karta hai
const db = require("./db"); //ye db.js file ko import karta hai jo ki database connection aur query execution ke liye hai
const { mongo } = require("mongoose");
const mongoose = require("mongoose");
require('dotenv').config(); // ye dotenv ko import karta hai jo ki environment variables ko manage karta hai, isse hum sensitive information jaise database URL ko store kar sakte hain bina code me hardcode kiye

const bodyParser = require("body-parser"); // ye body-parser ko import karta hai jo ki request body ko parse karta hai
app.use(bodyParser.json()); //  (req.body) me data save kar lega  ye body-parser ko use karta hai jo ki request body ko json format me parse karta hai
const PORT = process.env.PORT ; // ye port ko environment variable se set karta hai agar nahi hai to 3000 port use karega

app.get("/", (req, res) => {
  res.send(
    "Welcome to my hotel..!"
  );
});

app.get("/disconnect", (req, res) => {
  mongoose.disconnect(); // ye mongoose ko disconnect karta hai database se
  res.send("Disconnected from the database"); // ye response send karta hai ki disconnect ho gaye hain
});


//Import the router files
const personRoutes = require('./routes/personRoutes'); // ye personRoutes.js file ko import karta hai jo ki person ke routes ko handle karta hai
const menuItemRoutes = require('./routes/menuItemRoutes'); // ye menuItemRoutes.js file ko import karta hai jo ki menu items ke routes ko handle karta hai

//use the routers
app.use('/person', personRoutes); // ye personRoutes.js file ke routes ko use karta hai, ab jab bhi /person route pr request aayegi to personRoutes.js file ke routes handle honge
app.use('/menu', menuItemRoutes); // ye menuItemRoutes.js file ke routes ko use karta hai, ab jab bhi /menu route pr request aayegi to menuItemRoutes.js file ke routes handle honge


//ye server ko 3000 port pr sunta hai
app.listen(PORT, () => {
  console.log("Server is listening in port 3000");
});


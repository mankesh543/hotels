//Ye file database connection aur query execution ke liye hai
const mongoose = require('mongoose');

// Mongoose ko connect karne ke liye URL
const mongoURL = 'mongodb://localhost:27017/hotels'; // Apne database ka naam yahan daalain

// Mongoose ko connect karne ka function
mongoose.connect(mongoURL)
//get the default connection
//Mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;// Database connection ka object

//Define event listeners for the database connection
//connected, error, disconnected ye sab events hain jo database connection ke liye hain aur inhe handle karne ke liye listeners define kiye gaye hain jo 
// jo ki const db ke object par hain
db.on('connected', () => {
    console.log('Connected to mongodb database sever successfully')
})

db.on('error', (err) => {
    console.error('Error connecting to mongodb database:', err);
})

db.on('disconnected', () => {
    console.log('Disconnected from mongodb database');
})

//Export the database connection object
module.exports = db;//ye db mongoodb connection ko reprsent karta hai aur isse baaki files mein use kiya ja sakta hai
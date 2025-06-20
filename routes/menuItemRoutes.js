const express = require('express');// ye to basic criteria hai chahiye hi chahiye
const router = express.Router();// taking the router from express
const MenuItem = require("./../models/MenuItem"); // ye MenuItem model ko import karta hai jo ki menuItemSchema ka use karta hai

// POST method - Add a new menu item
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// GET method to get the Menu Items
router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find(); // All records from DB
    console.log("data fetched");
    res.status(200).json(data); // Send fetched data as JSON
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router; // ye router ko export karta hai taaki server.js file me use kiya ja sake
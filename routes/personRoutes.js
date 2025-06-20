const express = require("express"); // ye to basic criteria hai chahiye hi chahiye
const router = express.Router(); // taking the router from express
const Person = require("./../models/Person");

// Post route to add a person
router.post("/", async (req, res) => {
  //ab ye app na ho k ho gya router kyuki hum router ka use kar rahe hain, ye post request hai jo ki /person route pr ja rhi hai, aur ye async function hai kyuki hume database se data fetch karna hai jo ki asynchronous hota hai
  //ye call tab hota hai jab client post request bhejta hai /person route pr, async function ka use kiya hai kyuki hume database se data fetch karna hai jo ki asynchronous hota hai
  try {
    const data = req.body; // Assuming the request body contains the person data, person ka data mil gya aur wo req.body me store ho gya h jo data cilent bhej rha h usko pehle body-parser ne parse kiya hoga

    //create a new person instance using the Person model
    const newperson = new Person(data); // ye person model ka instance banata hai jo ki personSchema ka use karta hai aur data ko pass karta hai

    //save the person instance to the database
    const response = await newperson.save(); // ye person instance ko database me save karta hai aur response me save kiya hua person instance return karta hai
    console.log("data saved successfully:", response); // ye console me data saved successfully ka message print karta hai
    res
      .status(200)
      .json({ message: "Person added successfully", person: response });
  } catch (err) {
    //jab fail ho jata hai to catch block me chala jata hai
    console.log(err); // agar error aata hai to console me error print karta hai
    res.status(500).json({ error: "Internal Server Error" }); // agar error aata hai to response me 500 status code aur error message send karta hai
  }
});

//GET method to get the person

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // Extract the work type from the URL parameter
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// PUT method to update a person

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Extract the id from the URL parameter
    const updatedPersonData = req.body; // Updated data for the person

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// DELETE method to delete a person
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; // Extract the id from the URL parameter

    const response = await Person.findByIdAndDelete(personId); // Find the person by id and delete it
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("data deleted");
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router; // ye router ko export karta hai taaki server.js file me use kiya ja sake

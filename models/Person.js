const mongoose = require('mongoose');


//Define the schema for the person

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true//means name chahiye hi chahiye means ki age koi form fill kar rha hai to name field chahiye hi chahiye, age hta denge to bina naem ka v fill akr denge form
  },
  age:{
    type: Number
  },
  work:{
    type: String,
    enum: ['chef', 'waiter', 'manager'], // ye enum ka use karte hain ki sirf inhi me se koi bhi ek value ho sakti hai
    required: true // ye required hai ki work field chahiye hi chahiye
  },
  mobile: {
    type: String,
    required: true,
    unique: true // ye unique hai ki mobile number sirf ek hi baar use ho sakta hai
  },
  email: {
    type: String,
    required: true,
    unique: true // ye unique hai ki email sirf ek hi baar use ho sakta hai
  },
  address: {
    type: String,
    required: true // ye required hai ki address field chahiye hi chahiye
  },
  salary: {
    type: Number,
    required: true // ye required hai ki salary field chahiye hi chahiye
  }
 
}); 

//Create the model for the person
const Person = mongoose.model('Person', personSchema);// ye model banata hai jo ki personSchema ka use karta hai aur Person naam ka model banata hai
module.exports = Person; // ye module.exports ka use karke Person model ko export karta hai taaki dusre files me use kiya ja sake
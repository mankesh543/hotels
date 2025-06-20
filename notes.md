//Method 1:- function declearation in Javascript

// function add(a,b){
//     return a + b;
// }


//Method 2:- function declaration in javascript
// var add = function(a,b){
//     return a+b;
// }

//Method 3:- Fat Arrow function in Javascript
//var add = (a,b) => {return a+b};

//Method 4:- Fat Arrow function in Javascript with implicit return
// var add = (a, b) => a + b;

// //Method 5:- 
// (function(a,b){
//     console.log("mankesh");
// })();
// var result = add(24,9);
// console.log(result); //output: 5



//CAllback function


// function callback(){
//     console.log('Mankesh is calling a callback function');

// }

// //ye main funciton hai pehle ye implement hoga fir callback function
// const add = function (a,b, callback){
//     var result = a+b;
//     console.log('result: '+result);//Main function work completely done
//     //Now we call the callback function
//     callback();
// }

// add(3,4, callback);




const add = function (a,b, callback){
    var result = a+b;
    console.log('result: '+result);//Main function work completely done
    //Now we call the callback function
    callback();
}

// add(2,3, function(){
//     console.log('add completed');
// });

// Using arrow function for callback
add(2,3, () => console.log('add completed'));





//All about os and fs module in node.js

var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);// ese hme user ka information deta hai username: 'mk518',

fs.appendFile('greeting.txt', 'Hi' + user.username + '!\n', ()=>{////ese file create ho gya hai greeting.txt
    console.log('file is created')   
}); 

// console.log(fs)// ese fs ka information deta hai ki file system kaise kaam karta hai
// console.log(os)// ese os ka information deta hai ki operating system kaise kaam karta hai




/***************************VIDEO 4**************************

SERVER.JS ME THA YE SAB

const notes = require('./notes.js');// This line imports the notes module
var _ = require('lodash');// This imports the lodash library, which is not used in this snippet but can be useful for utility functions

console.log('server file is available')

var age = notes.age;
var result = notes.addNumber(age+18, 10);
console.log(age);//45, it contains the value of age from notes.js
console.log('result is now ' +result);//63, it contains the result of addNumber function from notes.js

var data = ["Person", "Person", 1,2,1,2, 'name', 'age', '2'];
var filter = _.uniq(data);// This uses lodash to filter out duplicate values in the data array
console.log(filter);// This will log the unique values from the data array

console.log(_.isString('Mankesh'));// This checks if the value is a string and logs true

// YE NOTES.JS ME THA VIDEO 4TH ME HI

console.log('notes page loaded');

var age = 45;
const addNumber = function (a,b){
    return a+b;
}
module.exports = {// This exports the age variable so it can be used in other files
    age,// This exports the age variable so it can be used in other files
    addNumber // This exports the addNumber function so it can be used in other files
}


******************Vedio5**********************
//json ek tarrah ka string hai
//string to object 

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);// Parse the JSON string into an object
console.log(jsonObject.name);// Access the name property of the object

//object to string 

const objectToConvert = { name: "Alice", age: 25 };
const jsonStringified = JSON.stringify(objectToConvert); // Convert object to JSON string
console.log(jsonStringified);//{"name":"Alice","age":25}

console.log(typeof jsonStringified);// Output: string
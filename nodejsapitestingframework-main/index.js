// const fs = require("fs");
  

// Function to generate random number 
function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
// // STEP 1: Reading JSON file
// const users = require("./users");
   
// // Defining new user
// let user = {
//     name: "New User",
//     age: "07"+randomNumber(100000000,999999999),
//     language: ["PHP", "Go", "JavaScript"]
// };
   
// // STEP 2: Adding new data to users object
// users.push(user);
   
// // STEP 3: Writing to a file
// fs.writeFile("users.json", JSON.stringify(users), err => {
     
//     // Checking for errors
//     if (err) throw err; 
   
//     console.log("Done writing"); // Success
// });

function genRandonString(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; //0123456789!@#$%^&*()
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
 }

const fs = require('fs');
json = {
    name: ""+genRandonString(randomNumber(1,20)),
    age: "07"+randomNumber(100000000,999999999),
}
json = JSON.stringify(json);
fs.writeFile('./test-controller/users.json', json, (err) => {
    if (!err) {
        console.log('done');
    }
});
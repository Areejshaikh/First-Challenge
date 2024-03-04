"use strict";
// Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
// Question 2: Personal Message: Store a person’s name in a variable and 
// print a message to them, like “Hello Asharib, would you like to learn 
// some TypeScript today?”
let person_name = "areej zaheer";
console.log(`“Hello ${person_name} , would you like to learn some TypeScript today?”`);
// Question 3: Name Cases: Store a person’s name in a variable, and then 
// print that person’s name in lowercase, uppercase, and titlecase.
let userName = "Areej Zaheer";
// lowercase
console.log("LowerCase Method:", userName.toLowerCase());
// uppercase
console.log("UpperCase Method:", userName.toUpperCase());
//titlecase.
console.log("titleCase Method:", userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase());

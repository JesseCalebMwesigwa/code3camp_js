// Display Javascript Introduction
console.log("Javascript introduction");

console.log("Welcome!");

document.write("Welcome to the Product List App");

// alert("Welcome");

// if else loop
var isAppLoaded = true;
if (isAppLoaded){
    console.log("The app is loaded");
} else {
    console.log("The app is not loaded");
}

// for loop
for (let y=1; y<6; y += 1){
    console.log(y);
}

// switch statement
let appState = "Good";
switch(appState){
    case "Good":
        console.log("The app is good");
        break;
    case "Bad":
        console.log("The app is bad");
        break;
    case "Fair":
        console.log("The app is fair");
        break;
    default:
        console.log("Not sure about the app state");
}

// block of code
var x = 5;
{
    var x = 10;
}
console.log(x);

// array
const apps =["Spotify", "Figma", "VSCode"];
console.log(apps);

// comments for javascript
//A variable is assigned a value in one place and then used repetitively. 

// This variable stores the current user's name for display purposes
const userName = 'John';

/*
Purpose of the script:
This script is a frontend application that interacts with the server.
*/

// Code that needs to be temporarily commented out to observe its impact:
// someCodeHere;

// JS Variables
// let x = 1;
// var x = 3;
// const number = 42;

// JS Let
{
    let variableInsideBlock = "Inside block";
    console.log("Inside block:", variableInsideBlock);
 
    console.log("Outside block:", variableInsideBlock);
  }
  
  for (let i = 1; i <= 3; i++) {
    console.log("Inside loop:", i);
  }
  
// JS Const
 const p = 10;
 console.log(p);  

 const person = {
    name: "Alice",
    age: 30,
    city: "New York"
  };
console.log(person);
// added code...
console.log(person.age);
console.log(person.city);  

// Arithmetic operations
let num1 = 10;
let num2 = 5;

console.log("Arithmetic Operations:");
console.log(`${num1 + num2}`);
console.log(` ${num1 - num2}`);
console.log(` ${num1 * num2}`);
console.log(` ${num1 / num2}`);

// Comparison operators
let a = 5;
let b = 10;

console.log("\nComparison Operators:");
console.log(` ${a > b}`);
console.log(`${a < b}`);
console.log(` ${a === b}`);
console.log(` ${a !== b}`);

// Logical operators
let j = true;
let k = false;

console.log("Logical Operators:");
console.log(`${j && k}`);
console.log(`${j || k}`);
console.log(` ${!j}`);

// JS Arithmetic
let q = 2; 
let w = 3;
console.log(`${q+w}`);
console.log(`${q-w}`);
console.log(`${q*w}`);
console.log(`${q/w}`);

// JS Array
const products = ["Laptop", "Phone", "iPad"];
console.log(products);

// assignment operators
let n=15;
let m=n+10;
console.log(m);

console.log(`${n+=5}`);
console.log(`${n-=5}`);
console.log(`${n*=5}`);

// JS Data Types
let country = "Uganda"; //string
console.log(typeof "Uganda")
let u; //undefined
let h = 3; //number
let student = {"name": "Jesse", "age": 22};
console.log(typeof student);
const phone = ["iPhone", "32GB"];
console.log(typeof ["iPhone", "32GB"]);
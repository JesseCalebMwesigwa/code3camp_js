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
let y = 1;
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
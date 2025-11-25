// Print
console.log("HI, This is my first progrem");

// Veriable

let a = "usama";
var b = 12;
const c = "Twelve"; 

console.log(a +" || "+" || "+ b+" || " + c);

// Condition

let name = "Usama";
if (name >= 20) {
    console.log("Login");
} else {
    console.log("Sorry");
}

// loops

for (let a = 0; a <= 10; a++) {
    console.log( a + "\n");
}

// Array

const arrey = ["1", "2000", "3", "4", "5"];

let size = arrey.length;
// for length
console.log(size);

// For print a arrey value

let arreys = arrey[2];
console.log(arreys);

// Function

function fun() {
    console.log("That's a first function ");
}
fun();


// MOdulas

import {p_age, p_name } from "./age.js";

console.log("Name:"+ p_name);
console.log("Age:"+ p_age);
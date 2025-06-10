const names = "John Doe"; // String
const repoCount = 10; // Number 

// console.log(names + repoCount + "Value");

console.log(`My name is ${names} and I have ${repoCount} repositories.`); // Template literals

const gameName = new String("Call of Duty"); // String object

// console.log(gameName[0]);
// console.log(gameName.__proto__); // Accessing the prototype of the String object

// console.log(gameName.toUpperCase()); // String method to convert to uppercase
// console.log(gameName.length);
// console.log(gameName.charAt(0)); // Accessing the first character
// console.log(gameName.indexOf("Duty")); // Finding the index of a substring

const newString = gameName.substring(0, 4); // Extracting a substring
console.log(newString); // Output: Call

const anotherString = gameName.slice(0, 4); // Another way to extract a substring
console.log(anotherString); // Output: Call

// Substring me negative index ko support nahi karta, slice karta hai

const newStringOne = "       shiva       ";
console.log(newStringOne.trim()); // Removing whitespace from both ends

console.log(gameName.split(" ")); // Splitting the string into an array 

const url = "http://www.youtube.com/watch?v=abc123";
console.log(url.replace("http://", "https://")); // Replacing part of the string


console.log(gameName.includes("Duty")); // Checking if a substring exists   

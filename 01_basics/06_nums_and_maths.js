const score = 400;
// console.log(score);


const balance = new Number(1000); //Explicitly creating a Number object
// console.log(balance);

// console.log(balance.toString().length); // Convert to string
// console.log(balance.toFixed(2)); 


const otherNumber = 123.656;
// console.log(otherNumber.toPrecision(4)); // Format number to 4 significant digits

const hundereds = 1000000;
// console.log(hundereds.toLocaleString("en-IN")); // Format number with locale-specific separators


// +++++++++++++++++++ Maths +++++++++++++++++++
// console.log(Math); 
// console.log(Math.abs(-4)); 
// console.log(Math.round(4.60)); 
// console.log(Math.ceil(4.2)); 
// console.log(Math.floor(4.9)); 
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3, 4, 5));



console.log(Math.random()); // Generates a random number between 0 and 1 
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // Generates a random number between min and max
console.log(randomNumber);


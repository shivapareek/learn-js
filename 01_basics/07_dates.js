// Dates

let myDate = new Date();
// console.log(myDate); // Current date and time

// console.log(myDate.toString()); // Convert to string representation
// console.log(myDate.toISOString()); 
// console.log(myDate.toJSON()); // Convert to JSON format
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString()); // Localized string representation
// console.log(myDate.toLocaleDateString()); // Localized date representation
// console.log(myDate.toLocaleTimeString()); // Localized time representation
// console.log(myDate.getFullYear()); // Get the full year
// console.log(myDate.getMonth()); // Get the month (0-11)
// console.log(myDate.getDate()); // Get the day of the month (1-31)
// console.log(myDate.getDay()); // Get the day of the week (0-6, where 0 is Sunday)
// console.log(myDate.getHours()); // Get the hour (0-23)
// console.log(myDate.getMinutes()); // Get the minutes (0-59)
// console.log(myDate.getSeconds()); // Get the seconds (0-59) 
// console.log(myDate.getMilliseconds()); // Get the milliseconds (0-999)
// console.log(myDate.getTime()); // Get the timestamp (milliseconds since January 1, 1970)

// let myCreatedDate = new Date(2023,0,23); // Create a date from a string
// let myCreatedDate = new Date(2023,0,23,5,3); // Create a date and time from a string
let myCreatedDate = new Date("01-14-2023"); // Create a specific date format from a string
// console.log(myCreatedDate.toLocaleString()); // January 23, 2023


let myTimestamp = Date.now(); // Get the current timestamp in milliseconds

// console.log(myTimestamp); // Current timestamp in milliseconds
// console.log(myCreatedDate.getTime()); // Timestamp of the created date
// console.log(Math.floor(myTimestamp / 1000)); // Convert milliseconds to seconds

let newDate = new Date()
console.log(newDate);
//array

const arr = [1, 2, 3, 4, 5];

const myHeros = ["ironman", "spiderman", "hulk", "thor", "captain america"];
const newArr = new Array(1, 2, 3, 4, 5);

// console.log(arr[1]);

// Array methods

// newArr.push(6);
// newArr.push(7);
// newArr.pop(); // Removes the last element
// newArr.unshift(0); // Adds an element at the beginning
// newArr.shift(); // Removes the first element
// console.log(newArr); // [1, 2, 3, 4, 5, 6]

// console.log(newArr.indexOf(3)); // Returns the index of the element
// console.log(newArr.includes(3)); // Checks if the element exists in the array
// console.log(newArr.length); // Returns the length of the array

// const newArray = newArr.join()
// console.log(newArr); 
// console.log(newArray); // Converts the array to a string


// slice , splice

console.log("A ", newArr);

const mysn1 = newArr.slice(1, 3); // Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log(mysn1); // [2, 3]
console.log("B ", newArr);

const myn2 = newArr.splice(1, 3); // Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log("C ", newArr); // [1, 5, 6]
console.log(myn2); // [2, 3, 4]

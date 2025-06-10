const marvel_heroes = ["thor", "ironman" , "spiderman"]
const dc_heroes = ["batman", "superman", "flash"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // ["thor", "ironman", "spiderman", ["batman", "superman", "flash"]]
// console.log(marvel_heroes[3]); // ["batman", "superman", "flash"]
// console.log(marvel_heroes[3][0]); // "batman"

// const newMarvelHeros = marvel_heroes.concat(dc_heroes);
// console.log(newMarvelHeros); // ["thor", "ironman", "spiderman", "batman", "superman

const all_new_heroes = [...marvel_heroes, ...dc_heroes]; //spread operator
console.log(all_new_heroes); // ["thor", "ironman", "spiderman", "batman", "superman

const another_array  = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity); // Flattens the array to a specified depth
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray(marvel_heroes))
console.log(Array.isArray("marvel_heroes")) // false
console.log(Array.from("shiva"));
console.log(Array.from({name: "shiva"}))

let score1 =  100
let score2 =  200
let score3 =  300

console.log([score1, score2, score3]); // [100, 200, 300]
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of("shiva", "kumar")); // ["shiva", "kumar"]
//singleton
// Object.create


//object literals
const mySym = Symbol("mySymbol");
const JsUser = {
    names: "Shiva", // key bhi string hi hota hai likhte nahi hai but hota hai
    "full name": "Shiva Pareek", // key with space
    [mySym]: "Symbol Value", // key as symbol
    age: 19,
    location: "Jaipur",
    email: "shiva@google.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],

}

// console.log(JsUser.names)
// console.log(JsUser["names"])
// console.log(JsUser["full name"]) // accessing key with space;
// console.log(JsUser[mySym]) // accessing key as symbol


JsUser.age = 20; // update
// console.log(JsUser.age) // 20
// Object.freeze(JsUser); // freeze the object, no changes allowed
JsUser.age = 21; // update
// console.log(JsUser.age) // 20


JsUser.greeting = function() { // add new key
    console.log(`Hello, JavaScript User! , ${this.names}`);
}
console.log(JsUser.greeting()); // function reference
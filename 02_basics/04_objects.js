// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1234abcd";
tinderUser.name = "Shiva";
tinderUser.age = 19;
// console.log(tinderUser); // empty object

const regularUser = {
    email : "user@google.com",
    fullName : {
        userfullname: {
            firstName: "Shiva",
            lastName: "Kumar"
        }
    }
}
// console.log(regularUser.fullName.userfullname.firstName); // accessing nested object


const  obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};

// const obj3 = {obj1, obj2}; // nested object
const obj3 = Object.assign({}, obj1, obj2); // merge objects
// const obj3 = {...obj1, ...obj2}; 
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'd', '5': 'e', '6': 'f' } }

const users = [
    {
        id: 1,
        name: "Shiva",
    },
    {
        id: 1,
        name: "Shiva",
    },
    {
        id: 1,
        name: "Shiva",
    },
]

users[1].name;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // get keys of object
// console.log(Object.values(tinderUser)); // get values of object
// console.log(Object.entries(tinderUser)); // get values of object
// console.log(tinderUser.hasOwnProperty("id")); // check if object has property


const course = {
    courseName: "JavaScript",
    coursePrice: 199,
    courseAuthor: "Shiva Kumar",
}

// course.courseName

const { courseName: name, coursePrice: price, courseAuthor: author } = course; // object destructuring
console.log(name, price, author); // JavaScript 199 Shiva Kumar


// const navbar = () => {

// }

// navbar(company = "Google");


// {
//     "name": "Shiva",
//    " age": 19,    
//     "course": "JavaScript",
//    " isLoggedIn": true,
// }

[
    {},
    {},
    {},
]
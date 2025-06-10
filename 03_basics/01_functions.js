// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");



function sayHello() {
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
    console.log("Hello World!");
}
// sayHello() // function call

function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2); // function body
    return num1 + num2;
}
const result = addTwoNumbers(1,2);
// console.log("Result " +result); 


function loginUserMessage(username = "Shiva"){
    if (!username) {
        console.log("Please provide a username");
        return
    }
    return `Welcome ${username}, you are logged in!`;
}
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...cartItems) {
  return cartItems
}
// console.log(calculateCartPrice(200,300,400,600));

const user = {
    username: "Shiva",
    price: 200,
}

function handleObject(any) {
    console.log(`Username: ${any.username}, Price: ${any.price}`);
    
}

handleObject(user);
handleObject({
    username: "John",
    price: 300,
})

const myArray = [1,2,3,4,5];

function returnSecondValue(getArr){
    return getArr[1]; // returns the second value of the array
}

// console.log(returnSecondValue(myArray)); // 2
console.log(returnSecondValue([10,20,30,40,50])); // 20


const user = {
    username: 'John',
    price: 100,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}, your price is ${this.price}`);
        console.log(this);
    },
}

// user.welcomeMessage()
// user.username = 'Shiva';
// user.welcomeMessage()
//   console.log(this);

// function chai(){
//     let username = 'Shiva';
//     console.log(this.username); // undefined
// }

// chai()

const chai = () => {
    let username = 'Shiva';
    console.log(this.username); // undefined
}
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(5,10)); // 15

// const addTwo = (num1,num2) => num1 + num2;

// const addTwo = (num1,num2) => (num1 + num2);

const addTwo = (num1,num2) => ({username: "Shiva"})
console.log(addTwo(5,10)); // 15

// const myArray =  [2,5,3,7]
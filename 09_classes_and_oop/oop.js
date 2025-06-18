const user = {
    username: "Shiva",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this)
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username , loginCount , isloggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedin = isloggedin;

    this.greeting = function (){
        console.log(`Welcome ${this.username}`);
        
    }

    // return this
}

const UserOne = new User("shiva" , 12 , true)
const UserTwo = new User("pareek" , 12 , true)
console.log(UserOne.constructor);
// console.log(UserTwo);



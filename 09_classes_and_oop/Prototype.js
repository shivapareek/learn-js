// let myName = "Shiva   "
// let myChannel = "Chai     "

// console.log(myName.trueLength);



let myHeros = ["thor" , "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.shiva = function(){
    console.log(`Shiva is present in all objects`);
    
}

Array.prototype.heyShiva = function(){
    console.log(`Shiva says hello`);
    
}
// heroPower.shiva()
myHeros.shiva()
myHeros.heyShiva()
// heroPower.heyShiva()

//inheritance

const User = {
    name: 'user',
    email: 'user@s.ai'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport , Teacher)


let anotherUsername = "ShivaPareek     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);

}

anotherUsername.trueLength()
"hitesh".trueLength()
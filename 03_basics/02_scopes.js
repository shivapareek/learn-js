

let a =400;
const b = 500;
var c = 600;


if (true) {
    let a = 100; // block scoped
    const b = 200; // block scoped
    var c = 300; // function scoped
    // console.log(a); // 100
}

// console.log(a);
// console.log(b);
// console.log(a);

function one(){
    const username = "shiva"

    function two(){
        const website = "shiva.com";
    console.log(username); // shiva
}
// console.log(website); // shiva.com
two()
}
// one()


if (true) {
   const username = "shiva";
   if (username === "shiva") {
       const website = "shiva.com";
    //    console.log(username + website); // shiva.com
   }
//    console.log(website); 
}
// console.log(username); // ReferenceError: username is not defined

// +++++++++++++++++++++++ interseting +++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1;
}



const addTwo = function(num){
    return num + 2;
}
addTwo(5)
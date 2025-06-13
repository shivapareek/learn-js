const userEmail = "s@shiva.ai"
// bina comparision ke true false assume krna

if (userEmail) {
    console.log("Got Email !");
    
}else{
    console.log("Don't have Email");
}

// falsy values 

// false, 0 , -0 ,BigInt 0n , "" , null , undefined , NaN 

//truthy values
// "0" , 'false' , " " , [] , {} , function () {}

// if (userEmail.length === 0){
//     console.log("Array is Empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ){
console.log("Object is Empty!");

}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

// Terniary Operator

// condition ? true : false 

const ice = 100
ice < 80 ? console.log("less than 80") : console.log("more than 80");




let a =400;
const b = 500;
var c = 600;


if (true) {
    let a = 100; // block scoped
    const b = 200; // block scoped
    var c = 300; // function scoped
    console.log(a); // 100
}

// console.log(a);
// console.log(b);
console.log(a);
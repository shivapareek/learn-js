const coding = ["js" , "cpp" , "ruby" , "py"]


// coding.forEach( function (item) {
//     console.log(item);
// } ) 

// coding.forEach( (item) => {
//     console.log(item)
// } ) 

// function printMe(item){
//      console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item , index , arr) => {
//     console.log(item , index , arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "cpp",
        languageFileName: "c++"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})
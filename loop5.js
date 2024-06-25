 const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function(value)
// {
//     console.log(`  and value is ${value}`);
// } )

const arr2 =['atharv','sarthak','vandit','purvang']
arr2.forEach( (name)=>
{
    console.log(name);
})

// coding.forEach( (item, index, arr)=> {
//         console.log(item, index, arr);
//     } )


function pritnMe(item)
{
    console.log(item);
}

coding.forEach(pritnMe)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (value) => {
    
    console.log(value.languageName);
} )
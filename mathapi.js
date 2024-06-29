const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);


var User = {
    name : 'Atharv',
    position : 'HR',
    salary : 40000
}

Object.defineProperty(User, 'salary', {
    configurable: false 
});

console.log(Object.getOwnPropertyDescriptor(User, "salary"));


// console.log(Object.getOwnPropertyDescriptor(User,"salary"));

// let descriptor = Object.getOwnPropertyDescriptor(User,"name",)
// console.log(descriptor);

let Company = {
    name : 'Nirma',
    owner : 'ABC',
    turnOver : 40000000
}

console.log(Object.getOwnPropertyDescriptor(Company,"owner"));

Object.defineProperty(Company,'owner',{
    writable : false
})

console.log(Object.getOwnPropertyDescriptor(Company,"owner"));
let myHeros = ["thor", "spiderman"]

let freedomfighters = ['bhagat','shekhar','sardar']
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.supermacy= function()
{
    console.log('hitesh has supermacy');
}

Object.prototype.heyHitesh = function()
{
    console.log('hello i am hitesh');
}

// heroPower.supermacy()
// myHeros.supermacy()
// heroPower.heyHitesh()
// freedomfighters.heyHitesh()

const user = {
    name : 'chai',
    email : 'hitesh@google.com'
}

const Teacher ={
    isAvailabe : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
}

Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport.isAvailable); // Output: false

//in js arrays and  strtings are indirectly objects 
//functions are functions

function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment= function()
{
    this.score++
}

createUser.prototype.print=function()
{
    console.log(`price is ${this.score}`);
}

let chai = new createUser('chai',25)
let  tea= new createUser('tea',256)

chai.print()
tea.print()
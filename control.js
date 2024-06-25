if (2 === '2') {
    console.log('it is true');
}
else{
    console.log('not true');
}

const score = 200

if (score > 100) {
    const power = 'fly'
    console.log(`user power ${power}`)
}

// console.log(power)

const balance = 1000

if (balance > 500) console.log('balance is full') //implicit scope that does not use return key word

const cash = true
const debitcard = true

if (cash && debitcard) //check both
     {
    console.log('you are allow to buy');
}

const loggedIn = true
const passsword = true

if (loggedIn||passsword) //check any one
    {
    console.log('allowed')
}
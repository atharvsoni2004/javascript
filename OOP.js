// const user = {
//     name : 'Atharv',
//     logincount:8,
//     IsLoggedIn : true,
//     message : function display ()
//     {
//         console.log('hii');
//     }
// }

// user.message()

const userOne = {
    name : 'Hitesh',
    logincount : 2,
    IsLoggedIn : false,
    getDetails : function()
    {
        console.log(this.name);
        console.log(this.logincount);
    }
}

userOne.getDetails()
console.log(userOne.name);
console.log(userOne.getDetails());

// function userOne(username,usercity,logincount)
// {
//     this.username = username
//     this.usercity = usercity
//     this.logincount=logincount
//     this.greeting = function()
//     {
//         console.log(`hello${this.username}`);
//     }
// }

// const first_user = new userOne('Vandit','diu',5);
// const second_user = new userOne('sahil','surat',6)
// console.log(first_user);
// console.log(second_user);

// // function anotheruser(username, loginCount, isLoggedIn){
// //     this.username = username;
// //     this.loginCount = loginCount;
// //     this.isLoggedIn = isLoggedIn

// //     this.greeting = function(){
// //         console.log(`Welcome ${this.username}`);

// //     }

// //     return this
// // }

// // const userOne = new anotheruser("hitesh", 12, true)
// // const userTwo = new anotheruser("ChaiAurCode", 11, false)
// // console.log(userOne);
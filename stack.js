/* primitive use stack memory 
 and non primitive use heap memory 
 
 
 stack(primitive) heap(non primitive)
 stack shares copy value and heap shares original value
 */

 let name = 'Atharv'
 let anotherName = name;
anotherName ='Sarthak'
 console.log(name);
console.log(anotherName);

const user = {
    name: 'Atharv',
    age: 18,
    email: 'atharv@gmail.com',
    job: 'developer' // Corrected spelling
}

 user.email = 'Atharv@google.com'
console.log( user.email);

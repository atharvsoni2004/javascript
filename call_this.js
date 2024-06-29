function setUser(username)
{
    this.username=username
}

function createUser(name,email,password) {
    setUser.call(this,name)
    this.email = email
    this.password = password
}
let name = new createUser('Atharv')
console.log(name);

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe"
  const fullName = person.fullName.call(person2);  // First Name: Mary, Last Name: Doe

  // Log the returned full name
  console.log("Full Name:", fullName); 
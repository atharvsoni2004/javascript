class user  {
    constructor(username,email,password)
    {
        this.username = username
        this.email = email
        this.password=password
    }
    returnValue() {
        return `${this.password}`
    }
}

const person = new user('jay','jay@gmail.com',123)

console.log(person.returnValue());
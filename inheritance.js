class User {
    constructor(username)
    {
        this.username = username
    }
    displayName ()
    {
        console.log(`name is ${this.username}`);
    }
}

class teacher extends User {
    constructor(username,email,password)
    {
        super(username)
        this.email = email
        this.password=password
    }

    course()
    {
        console.log(`new course was added by ${this.username}`);
    }

    logMe()
    {
        console.log(`logged by ${this.username} and password is ${this.password}`)
    }
}

var chai = new teacher('jay','a@gmail.com','123')
var cofee = new teacher('sahil','sahil@gmail.com','456')
chai.displayName
chai.course()
cofee.logMe()
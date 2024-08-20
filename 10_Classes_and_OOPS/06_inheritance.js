class User {
    constructor(Username){
        this.Username = Username
    }

    logMe(){
        console.log(`USERNAME is ${this.Username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai@.com","123")

chai.addCourse()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);

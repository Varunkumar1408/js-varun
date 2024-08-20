class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}varun`
    }

    set password(value){
        this._password = value
    }
}

const varun = new User("h@varun.ai", "abc")
console.log(varun.email);

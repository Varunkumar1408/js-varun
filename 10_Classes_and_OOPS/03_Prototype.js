// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myheros = ["thor","spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.varun = function(){
    console.log(`varun is present in all objects`);
}

Array.prototype.heyvarun = function(){
    console.log(`varun says hello`);
}

//heroPower.varun()
// myheros.varun()
// myheros.heyvarun()

// Inheritance

const User = {
    name: "chai",
    email: "chai@microsoft.com"
}

const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: 'JS assignments',
    fulltime: true,
    __proto__: TeachingSupport
} 

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiaurbiscuit    "
String.prototype.TrueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.TrueLength()
"varun".TrueLength()
"shibani".TrueLength()
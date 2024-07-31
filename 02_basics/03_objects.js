// object literals

const mySum = Symbol("key1")
const JsUser = {
    name: "varun",
    [mySum]: "mykey",
    age: "23",
    location: "hyd", 
    email: "var@google.com",
    isLoggedIn: false,
    LastloginDays: ["monday","saturday"]
}
//console.log(JsUser.email);    //to print the value inside the key
//console.log(JsUser["email"]); //we can also use like this
//console.log(JsUser[mySum]);
//console.log(JsUser);

JsUser.greeting = function() {
    console.log("hello bidhu kaisa hai !!!");
}

JsUser.greetingTwo = function() {
    console.log(`hello bidhu kaisa hai, ${this.name} `);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



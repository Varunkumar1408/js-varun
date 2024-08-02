const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username= "hitesh"
//     console.log(this.username);
// }
// chai()

// Arrow function //
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

//implicit method
//const addTwo = (num1,num2) => num1 + num2
//const addTwo = (num1,num2) => (num1 + num2)
const addTwo = (num1,num2) => ({username: "varun"})

console.log(addTwo(3,4));


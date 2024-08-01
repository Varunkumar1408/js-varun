function saymyName() {
    console.log("v");
    console.log("a");
    console.log("r");
    console.log("u");
    console.log("n");
}
//saymyName()

// function addtwoNum(num1 , num2) { //here we call it parameters :- content which is written in the bracket
//     console.log(num1 + num2);
// }
//addtwoNum(4,4) //here we call it arguments :- content which is written in the bracket
addtwoNum(2,"4")
addtwoNum(4,"a")
addtwoNum(2,null)

function addtwoNum(num1 , num2) { //here we call it parameters :- content which is written in the bracket
    let result = num1 + num2
    return result
}
const result = addtwoNum(3,5)
//console.log("result: ", result);

function userMessage(username){
    return `${username} just logged in`
}
// console.log(userMessage("varun"));// varun just logged in
// console.log(userMessage(""));// just logged in
// console.log(userMessage());// undefined just logged in

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(10,20,30,40));

// how to access an object in a function
const user = {
    username: "shibani",
    price: 200
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)
handleObject({
    username: "shibani",
    price: 200
})

// how to access an array in a function
const mynewArray = [200,300,400]

function returnValue(getarray){
    return getarray[1]
}

//console.log(returnValue(mynewArray)); //300
console.log(returnValue([200,300,400])); //300

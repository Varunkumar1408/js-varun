// Primitive Datatype :-
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 766543456788765098n

// Non-Primitive Datatype :-
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

function myFunction(){
    console.log("Hello world");
}

console.log(typeof heros);


//Return type of variables in JavaScript
//1) Primitive Datatypes
//       Number => number
//       String  => string
//       Boolean  => boolean
//       null  => object
//       undefined  =>  undefined
//       Symbol  =>  symbol
//       BigInt  =>  bigint

//2) Non-primitive Datatypes
//       Arrays  =>  object
//       Function  =>  function
//       Object  =>  object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// There are two types of memory allocations in javascript !!!
// 1) Stack memory (primitive datatype)
// 2) Heap memory  (non-primitive datatype)

let myYoutube = "varkumdotcom"
let anothername = myYoutube
anothername = "chaiaursutta"
console.log(myYoutube);
console.log(anothername);

let userone = {
    email: "user@google.com",
    upi: "user@ybl",
}
let usertwo = userone

usertwo.email = "varumkumar@google.com"
console.log(userone.email);
console.log(usertwo.email);





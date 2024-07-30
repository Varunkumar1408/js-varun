// Arrays

// declaration and initilization
const myArr = [0,9,2,3,4,5]
const myHeros = ["bhagatSingh","viratKholi","sachinTeldulkar"]
const arr2 = new Array(1,2,3,4,5)
//console.log(myArr[1]);

// array methods

//arr2.push(6) //adds the given element from the last into the array
//arr2.pop() //deletes the last element from the array
// console.log(arr2.includes(9));
// console.log(arr2.indexOf(3)); //returns -1 if the found element is not present

const newarr = arr2.join() //join arrays and returns datatype in string
console.log(arr2);
//console.log(newarr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
//console.log(text);

const myn1 = arr2.slice(1,3) // slice() creates a new array with a portion of elements copied from the original array
const myn2 = arr2.splice(1,3) // splice() mutates the original array itself by removing, replacing or adding elements to it
console.log(myn1);
console.log(myn2);
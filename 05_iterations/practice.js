// function sum(a=5,b=7){
//     console.log(a+b); //20
// }
// sum(null,20)

//console.log(+'10' - 5); // 5

// var x = 10;
// if (x>5) {
//     let x = 20;
//     console.log(x); //20
// }
// console.log(x); // 10

// let x = 21;
// let girl = function(){
//     console.log(x); // referenceError
//     let x = 20;
// }
// girl();

// function display()
// {
//     console.log(10+20+"30"); //3030
// }
// display();

// function myFunction(a,b,c){
//     return [a,b,c,a,b,c]
// }
// const result1 = myFunction.length
// const result2 = myFunction(1,2,3).length
// console.log(result1,result2); // 3 6

// const arr = [{},'2','hello'];
// delete arr[1];
// console.log(arr.length); // 3

// var length = 20;
// function count(){
//     var length = 20;
//     console.log(this.length); //3
// }

// const data = [count, "A",0];

// data[0]("Hey!");

// let x = 50;
// if(x===50){
//     let y = 100;
// }
// console.log(y); //Error

// let x;
// console.log(x===undefined); //true

//console.log(1<2<3);//true

// let x = 2 ** 3;
// let y = 3 ** 2;
// console.log(x + y); //17

// console.log(true); //true
// console.log(+true); //1

//const arr1 = [1,2,3];
//const arr2 = [...arr1,4,5];
//console.log(arr2); //[ 1, 2, 3, 4, 5 ]

// let a;
// console.log(a + 2); //NaN

// const str = "javascript"
// console.log(str.length); //10

//console.log(+'10'-5); //5

//console.log(NaN==NaN); //false
//console.log(null==null); //true
//console.log(undefined==undefined); //true
//console.log(Boolean([])); //true

// let x = 2;
// let y = ++x +2;
// console.log(x,y); // 3,5

// let p = [1,2,3,4]
// p[p.length - 1]++ ;
// console.log(p); // [1,2,3,5]

// let a = 100;
// let b = a;
// ++a;
// console.log(a,b); // 101 100

// let x = [10] == [10];
// let y = x ? "true" : "false";
// console.log(y); //false

// console.log(1+ +"2" + "2"); //32
// console.log(1+ +"2" + +"2"); //5

// const [a, ,b] = [1,2,3]
// console.log(a,b); //1 3

// let num = 8;
// let result = num > 5 ? "yes" : "no"
// console.log(result); //yes

// const func = {x,y = x} => x + y;
// console.log(func(5)); // Syntax error

// let a = 2;
// let b = a++ ;
// let c = ++a ;
// console.log(a,b,c); // 4 2 4

// let arr = [0,1,2,3,4]
// console.log(arr.length - 3); // 2

// let a = 5**2;
// let b = 2**2;
// console.log(a*b);//100

var string1 = [1,2,3]
var string2 = [4,5,6,7,8,9,10];
var result = string1.concat(string2)
console.log(result);/*[
    1, 2, 3, 4,  5,
    6, 7, 8, 9, 10
  ] */
























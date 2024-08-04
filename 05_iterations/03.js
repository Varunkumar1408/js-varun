// for of

// ["" , "" , ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

 for (const num of arr) {
   // console.log(num);
}

const greetings = "hello, world!"
for (const greet of greetings) {
    if (greetings=="") {
        continue;
    }
    //console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('Fr', "france")
map.set('IN', "India")
//console.log(map);

for (const [key,value] of map) {
   // console.log(key, ':-' , value);
}

const myObject = {
    value1 : 'varun',
    value2 : 'kumar'
}
// for (const [key,value] of myObject) {
//     console.log(key, ':-' , value);
// }

//// NOTE :- WE CANNOT ITERATE OBJECTS INSIDE FOR-OF LOOP, WE USE FOR-IN LOOP FOR ITERATIONS OF OBJECTS
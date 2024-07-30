const marvel_heros = ["Thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);
// const allheros = marvel_heros.concat(dc_heros) // adds two or more arrays !!!
// console.log(allheros);

const all_new_heros = [...dc_heros,...marvel_heros]
//console.log(all_new_heros);

const new_array = [1,2,3,[4,5,6],7,8,[1,2,[6,7]]]
const new_array1 = new_array.flat(Infinity) //flat method simplifies the array and prints the new simpler array
//console.log(new_array1);

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
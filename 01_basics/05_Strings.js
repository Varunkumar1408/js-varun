const name = "varun"
const repoCount = 50

//console.log(name + repoCount);

//console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String('EjthkarrVarunn')
//console.log(gameName[0]);
//console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const newStringone = "   varun    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://varun.com/varun%20kumar"
console.log(url.replace('%20','-'));
console.log(url.includes('varun'));
console.log(gameName.endsWith('nn'));
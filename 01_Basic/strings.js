//string  C11
// to discuss on more string functions

const name = "Ravi"
const repoCount = 50

//console.log(name + repoCount + " values"); this is the old method we should avoide the same
//how we use today using `` call as backticks called as string interpolation,you create a place holers
// and can inject the value in the same. example 

console.log(`Hello my name is ${name}   and my repo count is ${repoCount} in github`);

//another way to define string

const gameName = new String ('Ravis-Lab-at-ggn')

console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(7));  // find the character value present on 7th location of word
console.log(gameName.indexOf('R'));   //find the value of R in the word.

const newString = gameName.substring(0, 4); 
console.log(newString);

const anotherString = gameName.slice(-8, 3)
console.log(anotherString);

//Trim 

const newStringTrim = "   RavisLab    "
console.log(newStringTrim);
console.log(newStringTrim.trim());


//Replace 

const url = "https://reckoncomputer.com/Anjanas%20Academy"
console.log(url.replace('%20', '-'));

console.log(gameName.split('-'));  //splitting the data in to differnet arracy cell with a sapartor 




















 


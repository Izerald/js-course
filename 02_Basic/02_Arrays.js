// Array CS-15

const marvel_Heros = ["thor","Iron Man","SpiderMan", "CaptAmerica"]
const dc_Heros = ["Superman","Flash","Batman","Panthom"]

//marvel_Heros.push(dc_Heros)

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);


// const allHero = marvel_Heros.concat(dc_Heros)
// console.log(allHero);

const allNewHeros = [...marvel_Heros, ...dc_Heros]  //this method is call Spread which is use to concat 2 Array to new one
//console.log(allNewHeros);

const another_Arry =[1,2,3,[6,7,8], 9, 10,[2,6,[7,3,2]]]
const realArray = another_Arry.flat(Infinity)  //or u can define how much deep the data can be picked up
//console.log(realArray);

//Data Scrapping from web. it have differnt set of data type object and string, we need in array 

console.log(Array.isArray("RaviT"))  //Checking what is it ? 
console.log(Array.from("RaviT"))
console.log(Array.from({name : "RaviT"})) //it will give a blank array as it can not key,values to array

let score1 = 100
let score2  = 230
let score3 = 250

console.log(Array.of(score1, score2, score3))
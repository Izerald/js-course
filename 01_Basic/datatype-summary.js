//Revision Datatype Summary - S9
// There are many data type in Js 3, 4, 6 type are stated in differnt books
//but in offical document all data type are defined as primitive and non primitive or reference type
//it means that how the data is being stored in the memory and how it be accessed. 
//Define premitive data type : 7 Categories 
//String ,Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3 // number no sepecific for decial numbers. 
const isLogginIn = false   // boolean
const outsideTemp = null  // null
let userEmail ;  //undefined 

const id = Symbol('123') 
const anotherid = Symbol('123')

console.log(id === anotherid );  // false
console.log(id == anotherid);    //fales 

const bigNumber = 34345669002325545456n 

//

//Reference Type or non premitive , we can allocate the memory to the reference
//Array, Object, Function 

const heros = ["Shaktiman","naagraj","doga"] ;  // array defined it will give refernce 

let myObj = {
    name : "ravi",
    age : 34
}  // We can defined a object in a variabl as well. 


const myFunction  = function (){
    console.log("Hello World");
    
}

//How to find a data type , which is very important in any programming 

console.log(typeof myFunction);

/// https://262.ecma-international.org/5.1/#sec-11.4.3 

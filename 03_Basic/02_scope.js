//Scope CS21

// let a = 10
// const b = 20
// var c = 30
//problem arises when we use {} brackets

//Block Scope is specific to the block in which it is defined.
//Global Scope, is availabe in block scope and for all 
{}


// console.log(a);
// console.log(b);
// console.log(c);

//var c = 300

// if(true){
//     let a =10
//     const b = 20
//     var c = 30
// }

//consol log will display the value of 30 , as it is define in inner scope. 

let b = 300
if(true){
    let a =10
    const b = 20    
    console.log("Inner if :", b);    
}
console.log(b);

//avoid using var in the program for error free code
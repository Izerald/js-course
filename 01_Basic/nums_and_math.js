//Numbers and Maths C12

const score = 100
// console.log(score);


const balance = new Number(100)  //defined in object what is the number type
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   // fixing value for two decimal place 

const newScore = 12345.672
// console.log(newScore.toFixed(2));
// console.log(newScore.toFixed(0));
// console.log(newScore);  cla

const otherNumber = 123.567  // to give the precise value upto the 3 digit value. 
// console.log(otherNumber.toPrecision(3));

const otherNumber1 = 23.567
// console.log(otherNumber1.toPrecision(3));

const hundres = 1000000   // define a new number 
// console.log(hundres.toLocaleString()); //display the value in US format 
// console.log(hundres.toLocaleString('en-IN'));   //displays the value in indian format

//-----------------+ MATHS +--------------------------

// console.log(Math);
// console.log(Math.abs(-5));  // it only convers -ve value to postive value . 
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

console.log(Math.random()); 
console.log(Math.random());   //the value will aloways come in between 0 -1 

console.log((Math.random()*10) + 1 );   // +1 is add to make sure we do not have Zero value 
console.log(Math.floor(Math.random()*10)+1 );  // floor function is used to give the single value 

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // formaul for getting random number greater than 10 

//new to redo the subject a revision 






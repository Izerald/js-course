let score = 33 

//console.log(typeof score);
//console.log(typeof (score));
///It states as the number on lower case now if make it to String 

let score1 = "33" 

//.log(typeof score1);
//console.log(typeof (score1));

///converting the string to Number  , all data type first letter would be Capital 
let valueInNumber = Number(score1)

//console.log();
//console.log(typeof (valueInNumber));

///the values which we are received is in alfanumeric , Can we convert into Number 

let score2 = "33abc"
let valueInNumber2 = Number(score2)
//console.log();
//console.log(typeof (valueInNumber2));
///Lets print and check what the value we are getting in valueInNumber2 
//console.log();
//console.log(valueInNumber2);

// We get a value NaN (Not A Number), In Javascript the string can be conveted into numbers as show above
//we need to check it value what we are receving , it will help us in investigating. 

let score3 = null
let valueInNumber3 = Number(score3)
//console.log();
//console.log(typeof (score3));


// "33" = 33
// "33abc" = NaN 
// true => 1 ; flase => 0

// Let check how we can convert it to boolian 

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);
// it will show the value a true which is correct 
// 1 => true ; 0 => is false
// "" => false
// "ravi" => true


// Let check if we can convert to string
let someNumber = 33
let stringNumber = String(someNumber)
console.log(someNumber);
console.log(typeof (someNumber));   //Typeof object help in showing the valriable type 










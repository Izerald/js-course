// Arrays CS-14
//Data Structures ...how we can keeping the data , [ ] array will use the square brackers 

const myArr = [1,2,3,4,5]
const myHero = ["shaktiman","Panthon","Nagraj","Chaha Choudhary"]

const myArr2 = new Array(2,4,5,78,9)

// console.log(myArr[2]);
// console.log(myHero[3]);
// console.log(myArr2[0]);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//Array Methods 

// myArr2.push(45)  //.push method is used for adding a new value in the array
// myArr2.push(32)
// myArr2.pop()      //.pop methid is used to remove the last value in array without give any index value
// console.log(myArr2);

myArr2.unshift(36)  //.unshfit method is used for adding a value in array at the begining of array
myArr2.shift()    //.shift method is used to remove the value from stating of array 
console.log(myArr2);

console.log(myArr2.includes(4));  // .include method is used to find the value is array, it give result
// in boolian , if falese ie value does not present give -ve value

const newArry = myArr2.join()    // Converted value into String, we can check the properity of new Arry
 
// console.log(myArr2);
// console.log(newArry);
// console.log(typeof(newArry));

//Slice and Splice 

console.log("A " , myArr2);

const myn1 = myArr2.slice(1,3)   //Last range is not included 

console.log(myn1);
console.log( "B ", myArr2);

const myn2 = myArr2.splice(1,3)   // .splice make the changes in the original array, it manuplated 
console.log( "C ", myArr2);        // Resut :  C  [ 2, 9 ]
console.log(myn2);



                                 


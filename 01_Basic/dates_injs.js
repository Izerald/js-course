// Dates CS13

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());  // use to string to see how the dates is display
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getUTCSeconds());
// console.log(myDate.getHours());

//console.log(typeof myDate);

let myCreateDate = new Date(2023,0,28)   // month in js starts from 0 (zero ie JAN)
// console.log(myCreateDate);
// console.log((myCreateDate.toDateString()));

let myCreateDateN = new Date(2023,0,28, 5, 2, 23) 
// console.log(myCreateDateN.toLocaleString());

let myCreateDateFormat = new Date("2023-02-14") // format is yyyy-MM-dd
let myCreateDateFormat1 = new Date("03-31-2023")
console.log(myCreateDateFormat1.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime()); // for comparision of date in case on any booking or polling 

//how to get the more details from the date. 

let myDateNew = new Date()
console.log(myDateNew);
console.log(myDateNew.getMonth());
console.log(myDateNew.getDay());


// How to define a date with more details about date as we can defined as per the requirement
myDate.toLocaleDateString('default', {
    weekday: "long"
})











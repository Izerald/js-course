// Object CS#16
// singleton is on one using constructor will have on single object, 
// Declearing object using literals will not create a singleton object , it will be multiple object
// object,create ; can also create an object, it will be singleton object
//Object.create


//object literals
const Jsuser = {
    name: "RaviT",
    age: 20,
    location: "Gurgoan",
    email: "ravit@gyan.com",
    isloggedin: false,
    lastloginDays : ["Mon","Tues","Wed","Thur","Fir","Sat"]
}
//how to access the objects 
// console.log(Jsuser.email)
// console.log(Jsuser["email"])

const mySym = Symbol("key1")

const JsuserA = {
    "full Name": "RaviT",
    age: 20,
    [mySym]: "myKey1",
    location: "Gurgoan",
    email: "ravit@gyan.com",
    isloggedin: false,
    lastloginDays: ["Mon","Tues","Wed","Thur","Fir","Sat"]
}

// console.log(JsuserA.email)
// console.log(JsuserA["email"])
// console.log(JsuserA["full Name"])
// console.log(JsuserA[mySym])

//how to overwirte the values in object

JsuserA.email = "ravitand@yho.com"
//Object.freeze(JsuserA)   //object freez is used to stop the overwite of any data. as stated below.
JsuserA.email = "ravitan@gks.com"
//console.log(JsuserA);

//using of Function 

JsuserA.greeting = function(){
    console.log("Hello JS User");
}
JsuserA.greetingTwo = function(){
    console.log(`Hello JS User, ${this["full Name"] }`);
}

console.log(JsuserA.greeting());
console.log(JsuserA.greetingTwo());
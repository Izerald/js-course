//  Object CS:17
//const trinderUser = new Object()

const trinderUser = {}

trinderUser.id = "AB1234"
trinderUser.name = "RaviT"
trinderUser.isloggedIn = false

//console.log(trinderUser);

const regularUser = {
    email: "raviT@someone.com",
    fullName: {
        userfullName: {
            firstName: "Ravi",
            lastName: "Seth" 
        }
    }
}

///console.log(regularUser.fullName.userfullName.firstName);

//optional chaining, if fullName does not exist 

///console.log(regularUser.fullName?.userfullName.firstName); //used with value retuned is blank or boolian

//creating of multiple object in one object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

//const obj3 = Object.assign({}, obj1, obj2, obj4)  // Curly barckets is used to assur the data of all object in new empty object

const obj3 = {...obj1, ...obj2}  //we can use spread funtion as well. 

//console.log(obj3);
//values from database 

const users  = [
    {
        id: 1,
        emailid: "rt@ykp.com"
    },
    {
        id: 2,
        emailid: "rta@ykp.com"
    },
    {
        id: 3,
        emailid: "rmt@ykp.com"
    }
]

users[1].emailid

console.log(trinderUser);

console.log(Object.keys(trinderUser));
console.log(Object.values(trinderUser));
console.log(Object.entries(trinderUser));


//check for the value is avaible in tinderuser

console.log(trinderUser.hasOwnProperty('isloggedIn'));

//de.structure 

const course =  {
    courseName: "DataScience",
    price: "19999",
    coureseInstructor: "Anjana"
} 

//course.coureseInstructor

const {coureseInstructor} = course
//de structure object 

const {coureseInstructor: Instructure} = course
console.log(coureseInstructor);
console.log(Instructure);

//API Concept : values are now jason not in xml

// {
//     "name": "Ravi",
//     "couseName": "DSci",
//     "price": "free"
// }

//https://randomuser.me     for API samle for testing and training
//jason formator 
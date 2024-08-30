const accountID = 123456
let accountName = "RaviTandon"
let accountEmailId = "ravi@gmail.com"
var accountPassword = 454545
accountcity = "Gurgaon"
let accountState;

// accountid = 2 // can not use , need to define scope

{
    //Called a scope //
}

/*
Prefer We should not use the Var file 
because of issue with log scope and functional scope
*/
console.log(accountID);
console.table([accountID,accountEmailId,accountPassword,accountName,accountcity,accountState])
//Comparision of Datatype - Session #8

console.log( 2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
//above are the basic conparision and works fine. 

// lets check how Js will react to comparison with string 

console.log("2"  > 1 );
console.log("02" > 1 );   // The resut will be true as it converts and check comparision , it a bit challanges

//Let check with Null values how it reacts 

console.log(null > 0 );
console.log(null == 0 );
console.log(null >= 0);   //why result set it true. it a value converion problem .
//keep in mind that comparision operator , equality operator works differently in Js 
//the reason is that an eqality check == and comarision ><>=<= works differentlu
//Comparision connvert null to number , treating it as 0 that's why (3) null >= 0 is true and
//others are false 

console.log(undefined == 0);
console.log(undefined > 0);
console.log((undefined < 0)); //why result set it true. it a value converion problem .

//Strict check  === it check the value and also the data type. 
//summary we should avoid comparision with null or indefined values 












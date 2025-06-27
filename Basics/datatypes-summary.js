/*
**********Primitive data types (call by value)**********

There are 7 categories :

1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol (Basic Understanding : to make any value unique we use Symbol)
7. BigInt


Q . Is javascript language dynamically typed language or statically typed language?? 
Ans -  

**********Non-Primitive data types (call by reference)

1. Array
2. Objects
3. Functions


*/


//**********Primitive Data Types Examples**********

const score = 100           // Number 
const scoreValue = 100.3    // Decimal Number
const userName = "Aditya"   // String
const isLoggedIn = true     // Boolean 
const outsideTemp = null    // null
let userEmail ;             // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 111111111222222222n 
// here in javascript we mostly do not need to use BigInt 
// data type bcoz mostly the number can withhold the bigger size number. 
// But if you still want to declare a number as big int then put 'n' in the last of number ex- let BigNum = 11111123n 

//**********Non Primitive Data Types**********

//Array, Objects, Functions

const heros = ["Iron Man", "Thor", "Captain America"]  // Array Example

//Objects = Any values declared inside curly braces i.e " { }" , they are Objects 

let myObj = {
    name : "Aditya",
    clgName : "Dr D Y Patil, School Of MCA, Lohegoan",
    degree : "MCA",
    rollNo : 104
}

console.log("I am "+heros[0]);

console.log(myObj);


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

// let myObj = {
//     name : "Aditya",
//     clgName : "Dr D Y Patil, School Of MCA, Lohegoan",
//     degree : "MCA",
//     rollNo : 104
// }

// console.log("I am "+heros[0]);

//console.log(myObj);

const myFunction = function(){
    console.log("Hello world!!!");
}


/*
*************** Stack and Heap Memory allocation ***************
1)Stack : used in Primitive types (When you declare the variable in stack memory
you get the copy of that particular variable.)

2)Heap : used in Non-Primitive Types like array, Functions, Objects
(When you declare a variable of Non-Primitive in heap memory you get the reference of the original value.)

in simple words: 
Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.

*/

let myName = "Aditya Bhalerao"

let fullName = myName

fullName = "Aditya Rajendra Bhalerao"

// console.log(myName);    // o/p : Aditya Bhalerao
// console.log(fullName);   // o/p : Aditya Rajendra Bhalerao 

// here we updated the value of fullName successfully because these are primitve data types and stored in 
// stack memory, so the copy of the variable is shared.

let userDetails = {
    roll : 104,
    name : "Aditya",
    college : "Dr D Y Patil",
    address : "Somnath Nagar WadgoanSheri"
}

let studentDetails = userDetails // here we are assigning the value of userDetails to studentDetails,
// then direct reference are shared and when we try to change any attributes then it will be reflected in both of them.

studentDetails.name = "Komal"

console.log(userDetails);
console.log(studentDetails);







/*
Dates in Javascript is calculated from January 1, 1970 and it is calculated in miliseconds
When an date is initialized or created then after printing some long string vakue is written , that is nothing but milliseconds from the January 1 1970
*/
let mydate = new Date(); //Date object is created.
// console.log(mydate);  // O/P : 2025-07-08T10:29:13.304Z
// console.log(typeof mydate); //object

// console.log(mydate.toString()); // Converts date in String format : Tue Jul 08 2025 15:59:13 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString()); // Converts to show only date and not time.
// console.log(mydate.toLocaleString()); //This shows date in US format with time i.e. : MM/DD/YYYY and time.
// console.log(mydate.toLocaleString(En-In));


//We can also create a date of our own selection 
//let createdDate = new Date(2023,4,22); //Format is (YYYY,MM,DD) here Monthh MM starts from 0 so 0 will be january and 1 will be february
let createdDate = new Date("04-22-2023"); //Here the month will start form 1 ie. January is 1.


//When printed with array format i.e. (2023,4,22) output will be : This will give : Mon May 22 2023 00:00:00 GMT+0530 (India Standard Time)
//console.log(createdDate.toString());  // When printed with specific date format like ("04-22-2023") this will print : ("04-22-2023")

let myTimeStamp = Date.now(); //This is timestamp used in Polls or quizes to compare that who gave the first answer like that there we use timestamp.
// console.log(myTimeStamp); //This will return milliseconds.
// console.log(createdDate.getTime()); //This will also return milliseconds so we can compare these 2 values and find or use that.

//To convert miliseconds into seconds we will divide it by 1000 and it will return a value in decimal so to manage that we use Math.floor() function to round off decimal value

// console.log(Date.now()/1000); // Ex-1751972181.382
// console.log(Math.floor(Date.now()/1000)); //Ex-1751972236

let newDate = new Date();
console.log(newDate.toString());

console.log(newDate.getDate()); // Returns the date only
console.log(newDate.getMonth()+1); // Returns the Month only
console.log(newDate.getDay()); //Returns the number of day. Ex-1 means Monday & 2 means Tuesday

console.log(newDate.toLocaleString()); //Here toLocaleString has the default format which will print : 7/8/2025, 10:21:54 PM

//But if we want we can customize the option of toLocaleString() function 
console.log(newDate.toLocaleString('default',{
    weekday : "long",//here there are lot of options to customize and get the required output
    }));





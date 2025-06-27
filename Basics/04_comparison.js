// console.log(2>3);   // false
// console.log(2<3);   // true
// console.log(10>=10); // true
// console.log(2<=2); // true
// console.log(2==3); //false
// console.log(2!=3); // true

// When we are comparing same data types then its okay to understand, 
// confusion occurs when we compare diffrent types of data, Lets see

// console.log("2" > 1); //here we are comparing 2 diffrent data types 
// console.log("02" > 1);
 //output will be True that means "2" is greater than 1.

//  console.log(null > 0); //false
//  console.log(null == 0); //false
//  console.log(null >= 0); //true that means null is converted to 0 here and rest 
 
//  //While undefined is not converted so it will give false as a output as shown below.
//  console.log(undefined == 0); //false
//  console.log(undefined > 0);  //false
//  console.log(undefined < 0);  //false
 
 // === : This operator not only compares the value of the variable but also the data type of the variable
 
 let a = 2
 let b = 1

 console.log(a===b);
 


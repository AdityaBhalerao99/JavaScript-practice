//This is direct declaration of a number using keywords like const,let,var
const score = 400 
// console.log(score);

//Here we are creating an object of Number. This will indicate that the value we are storing is of number type only.
const balance = new Number(100)
// console.log(typeof balance); //This will print Object.


// console.log(balance.toString().length); //Using toString() we can convert number type into string type.

//toFixed() is used mostly in number type.
//toFixed() method accepts digits as a parameter, this method wiil print the digits after the point
//Ex - toFixed(2) -> then two digits will be shown after the .(dot) Or point.
// console.log(balance.toFixed(2)); //this will print 100.00 

const hundreads = 100000000
// toLocaleString() -> returns the given number with commas in american standards for better readability.
// only toLocaleString() method 
// console.log(hundreads.toLocaleString()); // this will print 100,000,000 (American Format)
// console.log(hundreads.toLocaleString('en-IN')); // this will print 10,00,00,000 (Indian Format)



//*************************Maths*************************

console.log(Math);//this will return nothing in VScode or any other IDE but same printed on console of dev tools of browser then it will give lot of options
//this will show all the functions and values you can access by writing "Math." in DevTools of browser.

// console.log("Absolute value : ",Math.abs(-4)); // Absolute value means changes -ve values to +ve value
// console.log("Rounds off : ",Math.round(4.3)); // Rounds off to 4
// console.log("Rounds off : ",Math.round(4.7)); // Rounds off to 5
// console.log("Ceil function : ",Math.ceil(4.2));  //Ceil functions rounds off the number to the maximum value Ex : value = 4.3 then it'll be rounded off to 5
// console.log("Floor function : ",Math.floor(4.9)); // Floor function rounds off the number to the minimum value Ex : value = 4.9 then it'll be rounded off to 4 
 
// console.log(Math.min(3,5,6,9,2)); //returns the minimum value 
// console.log(Math.max(2,4,3,5,90)); // returns the maximum value
//Mostly Math.random will be used

console.log(Math.random()); //generates random number
console.log(Math.random() * 10); //generated number will be in decimal format anf it will be always in between 0-9

console.log((Math.random() * 10)  + 1); // In case if the generated random value is 0.00something then mostly the anser eill be zero. That's why we are adding 1 into the value to make sure that the value is not zero.




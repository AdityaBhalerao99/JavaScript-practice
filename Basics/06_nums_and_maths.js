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

console.log(Math.abs(-4));


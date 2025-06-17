const accountId = 12345 //const is keyword and oncce initialized with value , we cannot change
let accountEmail = "adityabhalerao@gmail.com"
let accountPassword  = "12435"
var accountName = "Aditya" // var is a keyword
let accountState; //if printed this will show 'undefined'

/*
prefer not to use 'var'
because of issue in block scope and functional scpoe
*/

accountCity = "Pune" // this will automatically detect the variable

console.log(accountId,accountEmail,accountPassword,accountName,accountCity)

console.table([accountId,accountEmail,accountPassword,accountName,accountCity,accountState]) //console.table([]) is used to print the values in table format
console.log("Hello Krishan Kataria !!")
console.log("---------------------------------------------")

// Values And DataTypes

// Primitive Data Types
// 1 Number for ex:12346,4.55
// 2 String :"Krishan" or 'Krishan'
// 3 Boolean : true or false and 0 or 1
// 4 null
// 5 undefined


// Non-primitive DataTypes

// 1 Array
let arr = ["Krishan", "Nitish", "Ankit", "Vishal"]

// 2 Object {}

console.log("-----------------------------------------------")


// Keyword  : let and Const
let myName = "Krishan"
// If you  want update your variable value then use let
const myName1 = "Krishan Kataria"
// If you dont want to update your variabe value then use const


console.log("------------------------------------------------")



let highScore = 300
// Here we use Assignment operator : = 
// Here we are assign 300 value into our variable highScore
console.log("Your Score is ::" + highScore)

let pwSkillsCoursePrice = 3500
console.log(pwSkillsCoursePrice)

pwSkillsCoursePrice = 5000
// Update let variable
console.log(pwSkillsCoursePrice)

let userName = "Krishan Kataria"
console.log(userName)

let pwCoursePrice = 200;
let gstOnCourse = 36
let gstAmmount = (pwCoursePrice * gstOnCourse) / 100
// Here we user arithmetic Operator : + - * / % are called arithmetic operator
//  + use for add values or * for multiple or / for divide or - For Subtract or % for remainder
let finalPurchaseAmmount = pwCoursePrice + gstAmmount
console.log("Final Amount To Be Paid: ", finalPurchaseAmmount)

let pwDsaCourse = 500
console.log("Final Price On DSA Course:", pwDsaCourse + 36);

console.log("Score is ", 3 ** 2);
// Here ** is the exponential operator for give the power in values

console.log("----------------------------------------------------")


// Camparison

let krishanHighScore = 400
let vishalHighScore = 200
console.log(krishanHighScore != vishalHighScore);
// Here we comparison operator for campare the two values 
// == or < or > or <= or >= or != are camparison operator
// and give boolean reasult
// === are use check camparison and types of two values

// Note That:- JS Are Forgiving language

console.log("--------------------------------------------");


// Logical Operator

let value1 = true
let value2 = false
let value3 = true
let value4 = false

console.log(value1 && value3);
// Here we use logocal operator 
// && or || 
//  in &&(and) operator each values should be true in multiple values
//  in ||(or) operator one values should be true in mulple values

let isLoggedIn = true
let cardDetails = false

console.log(isLoggedIn && cardDetails);

let gmailAccount = true
let emailAccount = false

console.log(gmailAccount || emailAccount);




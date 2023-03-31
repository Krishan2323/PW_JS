// Quick Revision

// Mocha -> LiveScript -> Javascript
// (1995 -> 1996 -> till Date)
// Netscape developed Mocha Programming inn (1995) which give the more functionality for the web
// Ecma Script made set of rule for Scripting language that standard follow
// all scripting language
// ES6 (2015) is best standard from the EcmaScript  for Scripting language
// After one year change the name Mocha to LiveScript(1996)
// LiveScript has one problem its does not gone famous
// the its name changing to JavaScript becase that time Java are very famous language
//  so its name change to LiveScript to JavaScript


// Any Programming language six Pillars(Basic of programming) its also known as Vanila Js
// Values
// Operations
// variables
// Decisions
// Loops
// Functions


// Node Js Developed by Ryan Dahl
// Node Js provide JavaScript runtime enviorment


// Condition in JS

// If else

let age = 17
if (age >= 18) {
    console.log("You are Allowed")
}
// when the given conditions are false then Else part will be Execute
else {
    console.log("You are not Allowed")
}

// if else  and else if
// In this you can check multiple condition

let myAge = 16

if (myAge < 18) {
    console.log("You can not vote")
}
// if first condition was failed then again check your second condition
else if (myAge < 0) {
    console.log("Invalid Age")
}
else {
    console.log("You can vote")
}

// nested if else
// if check condition in condition

let age1 = 18
let drivingLicense = true
if (age1 > 17) {
    // condition true then check again a conditon other you go in else part answer
    if (drivingLicense == true) {
        //    if second was true then you got answer other wise you in else part answer
        console.log("You can drive the car")
    }
    else {
        console.log("You can not dirve the car")
    }
}
else {
    console.log("You can not drive the car")
}


// Switch Case
// Switch is alternative of the if else condition
// becase in switch we can check multiple condition 

let user = "kuch nahi"

switch (user) {
    case "admin": {
        console.log("He is admin")
        break
    }
    case "Student": {
        console.log("He is  Student")
        break
    }
    case "Krishan": {
        console.log("He is Krishan Kataria")
        break
    }
    // if every condition was failed then default was work and 
    // you get the default part answer  in your terminal
    default: {
        console.log("You enter the Wrong user")
    }
}



console.log("--------------------------------------------------------")

// Loops in JS
// if you want to you set statement run again and again then you will use the loops
// same work donig again again in your program

// 1 : do while
// 2 : while
// 3 : for loop


// for loop

for (let i = 0; i < 10; i++) {
    // here i++ is the post increment operator and post i-- decrement operator
    console.log(i)
    // this loop ececuting when the given condition was failed
}
// this statement runs 0 to 9 because i = 0 and a < 10


//  while loops
// initialzation , conaditon , increament and decrement 

let i = 1
// assignment operator
while (i < 11) {
    // if while condtion was true then while loop excute other its not run
    console.log(i)
    i++
    // increment operator
}


// do while loop
// do while loop atleast run once if the conditon was true or false
//  do while loops once

let j = 1
do {
    console.log(j)
    console.log("Do while Loop")
    j++
    // increment operator
} while (j < 11)
// if the while conditon was true then do while loop run again other wise its stop

console.log("-------------------------------------------")


// ternary operator or ternary condition
// condition ? true:false
//  after ? we write true after : we false 


let isLoggedIn = true
//  isLoggedIn is the  condtion
isLoggedIn ? console.log("Go to Home Page") : console.log("Go to login page")







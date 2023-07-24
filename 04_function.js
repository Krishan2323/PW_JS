//  function are also khown as first class citizen
// function ek code of block hota hai jisse koi specific task perform krte hai
//  or reused bhi kr skte hai through out the program
//

// Function Declaration

function myFun() {
    // keyword(function) functionName
    console.log("This is a function");
    // Statements
}

// Call Function
myFun();

console.log("----------------------------------------------")

function sqr(x) { // x  --> Parameter
    console.log(x * x);
}
sqr(8); // 8 --> arguements

console.log("----------------------------------------------");


function genrateRoandomNumber() {
    return Math.floor(Math.random() * 100)
}
let randomNumber = genrateRoandomNumber();
console.log(randomNumber)
console.log(randomNumber)

console.log("_________________________________________________________")



function displayMessage(str) {
    console.log(str)
}

displayMessage("My name is Krishan Kataria")


console.log("_________________________________________________________")


function giveSomeMessage(messageToBeDisplay = "Hello! your are good student of PW Skills") {
    console.log(messageToBeDisplay);
}

giveSomeMessage("Hello Krishan")
giveSomeMessage()

console.log("__________________________________________________________________")



let array = [22, 33, 44, 55, 66]

function sumOfTwoArray([num1, num2]) {
    return num1 + num2
}

let sumOfTwoNumber = sumOfTwoArray(array.slice(2, 4))
console.log(sumOfTwoNumber)



console.log("_______________________________________________________________________")

function sumOfAllParameters() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum
}
let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 200, 300, 400, 500, 600, 700]

let sumOfAllNumbers = sumOfAllParameters(11, 22, 33, 44, 55, 66, 77, 88, 99, 100, 200, 300, 400, 500, 600, 700)

let sumOfAllNumbers1 = sumOfAllParameters(numbers.slice(0, numbers.length))

console.log(sumOfAllNumbers)
console.log(sumOfAllNumbers1)


console.log("_______________________________________________________________")

// Arrow Function

const square = (x) => x * x

console.log(square(8))

// multiple parametrs

const sumFunctioon = (x, y) => x + y

let sum = sumFunctioon(33, 33)
console.log(sum)

// return objects

const sumAndDiffFunction = (x, y) => {
    return ({ sum: x + y, Diff: x - y })
}
console.log(sumAndDiffFunction(33, 22))



// Anonymous Function

let greet = function () {
    console.log("Hello How Are you Krishan")
}
greet()



 
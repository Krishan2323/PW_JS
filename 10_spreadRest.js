//  Destructuring Rest,spread


// Spread
let newArray = [1, 3, 4, 5, 6]
console.log(typeof newArray)


const oneArray = [1, 2, 3, 4, 5]
const twoArray = [6, 7, 8, 9,]



const threeArray1 = [oneArray, twoArray]
console.log(threeArray1)
// This is worng way



const threeArray = oneArray.concat(twoArray)
console.log(threeArray)

// one more way
const threeArray2 = [...oneArray, ...twoArray]
console.log(threeArray2)


console.log("----------------------------------")
// Rest
// conver object to array

let obj = {
    fName: "Krishan",
    mNAme: "Sharma",
    lName: "Kataria"
}

function objFunctionn() {
    let args = Array.from(arguments)
    let finalArray = args.map(e => e)
    console.log(finalArray)
}
objFunctionn(obj)


function manyArguments() {
    let args = Array.from(arguments)
    let finalArray = args.map(e => e)
    console.log(finalArray)
}
manyArguments(1, 2, 3, 4, 5)
manyArguments(1, 2, 3, 4, 5, 7, 8)

function manyArguments2(...args) {
    let finalArray = args.map(e => e)
    console.log(finalArray)
}
manyArguments2(1, 2, 3, 4, 4, 5, 6)

console.log("------------------------------------")
// Example

const names = ["Krishan", "Flash", "Superman", "Virat"]
const newNames = ["Kataria", ...names]
console.log(newNames)

const myName = "Krishan Kataria"
console.log([...myName])

function pwskills(...values) {
    return values
}
console.log(pwskills("Krishan", "Kataria"))
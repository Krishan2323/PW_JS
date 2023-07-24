// Sets and Map

// sets is a objects that store unique value


let emptySet = new Set()
console.log(emptySet.size)

let myArray = [1, 2, 3, 4, 5, 3, 2]
let newSet = new Set([...myArray])
console.log(newSet)
console.log(newSet.size)

newSet.add(22)
console.log(newSet)

console.log(newSet.has(22)) // true
// has method return boolean value
console.log(newSet.has(222)) // false

newSet.clear()
console.log(newSet)

console.log("--------------------------------------------")

// Set Difference

function setDiff(setA, setB) {
    return new Set([...setA].filter(ele => !setB.has(ele)))
}
let set1 = new Set([1, 2, 3, 4])
let set2 = new Set([1, 2, 6, 7])
console.log(setDiff(set2, set1))

// set commmon values



function setComon(setA, setB) {
    return new Set([...setA].filter(ele => setB.has(ele)))
}
console.log(setComon(set1, set2))

console.log("------------------------------------")
// Map
let map = new Map()

let arr = [
    [1, "Krishan"],0
    [2, "Priti"],
    [3, "Nitish"],
    [4, "Ankit"]
]

arr.map((arrayItem) => map.set(arrayItem[0], arrayItem[1]))
console.log(map)
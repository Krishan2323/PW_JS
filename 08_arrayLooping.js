let arr = [2, 3, 4, 5]


// Using Function
arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
})

arr.map(function (element, index, arr) {
    console.log("Map: " + element, index, arr)
})

console.log("---------------------")

// Using Arrow Function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
})

// Another Example

const heros = ["Superman", "Spiderman", "Antman", "Captain America"]

heros.forEach((element) => {
    let hero2 = element.toUpperCase()
    console.log(hero2)
})

heros.map((element, index, heros) => {
    console.log("Map: " + index, element, heros)
})



// New Option Filter
console.log(heros)

const heroWithMan = heros.filter((h) => {
    return h.endsWith('man')
    // h.contains('man')
})
console.log("Filter:" + heroWithMan)


// shopping cart

const cartBill = [20, 30, 40]
const sumOfCart = cartBill.reduce((pre, curr) => pre + curr, 0)

console.log("Reduce:" + sumOfCart)

// Throug the map loop

let sumOfCart1 = 0;
cartBill.map((ele) => {
    sumOfCart1 = ele + sumOfCart1
})

console.log("Map:" + sumOfCart1)
console.log("-----------------------------")

// Gaming Score example

const gameScore = [200, 310, 300, 250, 150, 'Krishan']

// check if all value are numbers
console.log(typeof gameScore[1])
const gameScoreCheck = gameScore.every((value) => typeof value === 'number')
console.log("Check:" + gameScoreCheck)

// Find score above 200

const above200 = gameScore.find((score) => score > 200)

console.log(above200)



// Assignment
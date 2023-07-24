
console.log("--------------------------------------------")

let score = 3
function one() {
    let score = 1
    console.log("Function One", score)
}
function two() {
    let score = 2
    console.log("Function Two", score)
}
function three() {
    console.log("Function Three", score)
}

one()
two()
three()
console.log(score)

console.log("--------------------------------------------")



function outerFun() {
    let outerVar = 'I am at scope level 1'
    function innerFun() {
        let innerVar = 'I am at scope level 2'
        console.log(outerVar)
    }
    // console.log(innerVar)
    innerFun()
}
outerFun()


console.log("------------------------------------")


const myGlobalValue = 0

function func() {
    const val1 = 1
    console.log(myGlobalValue)
    function innerFunc() {
        const val2 = 2
        console.log(val2)
        console.log(val1)
        console.log(myGlobalValue)
        function innerOfInnerFunc() {
            const val3 = 3
            console.log(val3)
            console.log(val2)
            console.log(val1)
            console.log(myGlobalValue)
        }
        innerOfInnerFunc()
    }
    innerFunc()
}
func()

console.log("----------------------------------------")

// Closure
function superFunc() {
    let outerValue = " I am outer"
    function minorFunc() {
        console.log(outerValue)
        // jb koi function outer value ko acess kr skte hai ussi ko closure bola jata hai or yaad bhi rkhta hai
    }
    minorFunc()
}
outerFun()


console.log("------------------------")

const errorMessage = "File Not Found"

setTimeout(function callback() {
    console.log(errorMessage)
}, 10000);
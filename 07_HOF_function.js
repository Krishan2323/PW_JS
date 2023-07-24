const powerTwo = (n) => {
    return n ** 2
}
console.log(powerTwo(3))

// ----------------------------------------------

// Here down ek higher order function hai
// kyuki ek functionn k  ander hum dusra function as a 
//  parameter de rhe hai 
function powerCube(powerTwo, n) {
    return powerTwo(n) * n
}
console.log(powerCube(powerTwo, 3))


function syaHello() {
    return () => {
        console.log("HI Krishan")
    }
}

let guessValue = syaHello()
console.log(guessValue)
guessValue()


const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return m + n + p
        }
        return twoFun
    }
    return oneFun
}
console.log(higherOrder(5)(5)(5))


let myNums = [2, 34, 5, 6, 78, 8, 23]

const summArray = arr => {
    let total = 0
    arr.forEach(function (element) {
        total += element
    })
    return total
}
console.log(summArray(myNums))

function oneMoreHello() {
    console.log("Hello Krishan", Math.random())
}
setInterval(oneMoreHello, 2000)
// setTimeout(oneMoreHello, 2000)
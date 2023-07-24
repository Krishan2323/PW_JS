// Callbacks
console.log("---------------------------------")

//  jab hum kisi function me dusre function ko as arguments bejte hai wo higher order function hote par jo function hum as arguments bej rhe hote us function ko callbacks function kha jata

function k(x, fn) {
    // k -> is higher order function
    // fn -> is a callback
    console.log(x * x)
    fn()
}
k(10, function () {
    console.log("done with callback")
})

console.log("start")

setTimeout(function f() {
    console.log("timer done");
}, 3000);

console.log("end")

// JS ek synchronous language hai or sath hi single threaded hai

// browser js ko addtional features provide krvata hai jse Dom manipulation or asynchronous++++++

console.log("---------------------------------")


console.log("start")
setTimeout(function k() {
    console.log("Timer Done")
}, 300)
console.log("end")

// for (let i = 0; i <= 10000; i++) {
//     console.log(i)
// }

// to yha pe jo set timeout jo function hai wo non-blocking peace of code hai 
// uska 100 mili second lekin baad me jo loop aati hai wo blocking peace of code hai jiss wo timeout bich me khtm ho jata hai lekin blocking peace of code hone k karan setTimeout function loop baad hi output aayega

// to yhi pe ek concept aata hai event loop or callback queue

// callback baar check krta rhta hai global peace of empty hai ya nhi call stack enpty hai yanhi sb empty ho jata hai 

// tb call back queue timer function queue me dal deta hai or queue me jo phle aata hai wo phle run hota hai mtlb jiska timer kam hoga wo phle run ho jayega 

// jb sb empty ho jata hai tb callbacks queue timer function ko call stack me dal deta hai

console.log("---------------------------------")




 
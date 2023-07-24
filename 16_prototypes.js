//  ProtoTypes
console.log("----------------------------------")

let myHero = ["thor", "spiderman"]
let dcHero = ["batman", "flash", "superman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function () {
        console.log(`Spiderman power is ${this.spiderman}`)
    }
}
Object.prototype.krishan = function () {
    // its inject this krishan function in all array and object ,string
    // kyoki har chij object hai javascript me
    console.log("Krishan Kataria")
}

console.log(myHero.krishan()) //Array
console.log(dcHero.krishan()) // Array
console.log(heroPower.krishan())  // Object 

Array.prototype.heyKrishan = function () {
    // its inject this heyKrishan function in only Array
    console.log("Krihsan Kataria Array")
}

console.log(myHero.heyKrishan()) //Array
// console.log(heroPower.heyKrishan()) 
// its not assign in the object


console.log("--------------------------------------")


// Inheritance



const User = {
    name: "top name",
    email: "top@gmail.com"
}
const Teacher = {
    makeVideos: true
}
const TeacherSupport = {
    isAvaiable: false
}
const TAAssistant = {
    makeAssignment: "JS assignment",
    fullTime: true,
    // __proto__: TeacherSupport 
    // old fashaion
}
// console.log(TAAssistant.isAvaiable)

// Teacher.__proto__ = user 
// old fashaion

// Modern Syntax

Object.setPrototypeOf(TeacherSupport, Teacher)
console.log(TeacherSupport.makeVideos)




console.log("--------------------------------")

String.prototype.trueLength = function () {
    console.log(`True Length is ${this.trim().length}`)
}
"krishan   ".trueLength()


console.log("--------------------------------")
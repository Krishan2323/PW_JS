// kisi bhi real life enitiy ko objects bolte hai
// har objects k properties or method hote hai
// ya state or behaviour hote hai
// objects contain many values
//  objects ka use hum real life ko show krne k liye krte hai
// objects ek baar me bhut saari values ko inintialize kr pate hai
//  key:"Values"

// Creating objects and manipulating

let obj = {
    firstName: "Krishan",
    lastName: "Kataria",
    rollNo: 7008,
    course: "BCA",
    class: "6th",
    bestFriend: "Vishal",
    hobbies: "Cricket"
}
console.log(obj)



let emp = new Object()
emp.rollNo = 7008
emp.Name = "Krishan Kataria"
emp.bestFriend = "Vishal Singh"
console.log(emp)



function emp1(id, name, slary) {
    this.rollNo = id
    this.name = name
    this.slary = slary


}
const e = new emp1(7008, "Krishan", 100000)

console.log(e)

// Access data in the objects

console.log(emp.rollNo)
console.log(emp['Name'])


console.log("____________________________________________________")

function krishan(r, n, c) {
    this.rollNo = r
    this.name = n
    this.course = c
}

let obj1 = new krishan(7008, "Krishan", "BCA")
console.log(obj1)

console.log("___________________________________________")

function BCA(r, n, res) {
    this.rollNo = r
    this.name = n
    this.result = res
}

let outputOfBCA = new BCA(7008, "Krishan", true)
console.log(outputOfBCA)


console.log("_________________________________________________________")

// Acess the objects Key  Values pair 
console.log(outputOfBCA.rollNo)
console.log(outputOfBCA['name'])

// Assign the new key values pair
//  you can update the key value pair in the smae way

outputOfBCA.class = "6th"
outputOfBCA['field'] = "Computer Science"
console.log(outputOfBCA.class)
console.log(outputOfBCA.field)

console.log("________________________________________________________________")

//  delete the objects and objects properties

delete outputOfBCA.field
console.log(outputOfBCA)

console.log("___________________________________________________________________")

// Object Method

let newObj = {
    rollNo: 7008,
    name: "Krishan",
    age: 23
}
// Fetch the object key
//  its return a array in string form

let keys = Object.keys(newObj)
console.log(keys)

// Fetch the object vales

let values = Object.values((newObj))
console.log(values)

// Fetch booth in the object (key and values)

let entries = Object.entries(newObj)
console.log(entries)

console.log("______________________________________________________")

// Agr hum humare object me new key values pair ko add krna rona chahte hai pr
// purani jo key values pair unko update kr skte hai 
// or hum isme na remove krte hai object ki properties ko

newObj.name = "Kataria"
console.log(newObj)
newObj.address = "Ateli Mandi"


console.log("___________________________________________________")

// For now we can upadte and change the object key values pair
// But yeh hum rok skte hai using freeze function jisse hum  function 
//  na to upadte krpayege or na hi new key values pair add kr payege

Object.freeze(newObj)

newObj.name = "Katria"
newObj.address = "Ateli Mandi"
// yha pr hume object ki name properties ko upadte to kia hai lekin hua nhi
console.log(newObj)

console.log("____________________________________________________________________")

// agr apko nya object bnana hai purane object ki sari key values pair us nye ko assign krwana chahte ho

let obj2 = {
    name: "Krishan",
    sem: "6th"
}

let obj3 = Object.assign({
    // yha prr hum nyi key values pair add kr skte hai
    favTeacher: "Sanket Singh"
}, obj2)
console.log(obj3)

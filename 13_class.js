//  Class and Objects

class Product {
    // properties -> variables -> data member
    name;
    price
    rating

    // Contructor

    //  koi object bnane k liye constructor methos hi call horo hota hai
    // agr apne khud ka constructor likh dia to default construtor null and void rhega 
    // jb bhi hum class ka object bnayenge yeh automatic call ho jayega
    constructor(n, p, r) {
        console.log("calling the constructor")
        // this 
        // this js powerful method jo calling context ko refer kr rha hota hai
        this.name = n
        this.price = p
        this.rating = r
        // return 10 if you are returning primitive then it will be avoided in contructor
        // return { x: 20, y: 10 }  if you return non primitive it wil be returned
        console.log("------------------------------")
    }


    // begaviour -> function -> member function
    display() {
        console.log("Displaying the current product", this.name, this.price, this.rating)
    }
}
console.log("-------------------------------------")
const p = new Product('iphone', 10000, 5)
// new -> creates an empty plain object
//  Product () these parenthess we are calling the contructor  method
console.log(p)
// p.display()


console.log("-------------------------------------------")

// FunctionContructor
function Krishan(n, s, h) {
    this.name = n
    this.study = s
    this.hobby = h
}
const k = new Krishan("Krishan", 'BCA', 'Cricket')
console.log(k)


/*
1 :this keyword in js is diff than other languages
2 :this keyword refers to thr context from where we called 
in the functin constructor also
3 :return 10 if you are returning primitive then it will be avoided in contructor
 4 :return { x: 20, y: 10 }  if you return non primitive it wil be returned
5 : if you dont returned anything . then object refferd by this is returned
 */

console.log("--------------------------------------")

// Anonymous function

const product = function (n, p, r) {
    this.name = n
    this.price = p
    this.rating = r
}

const z = new product("iphone", 10000, 5)
console.log(z)
console.log("--------------------------------")

// arrow function
//  arrow functionn ko functionConstructor ki trh use nhi kr skte hai
//  the theory of this keyword pointing to not apllicable with arrow function
// EX

// const product1 = (n, p, r) => {
//     this.name = n
//     this.price = p
//     this.rating = r
// }

// const z1 = new product1("iphone", 10000, 5)
// console.log(z1)

// Another EX

let obj = {
    x: 10,
    fun: () => {
        console.log(this.x)
    }
}
obj.fun()
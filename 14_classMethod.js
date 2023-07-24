// static method

class Product {
    #name
    // # ka use krke hum private valriable declare kr skte hai
    // jo ki class k bhar update nhi kiya ja skta

    constructor(n, p, r) {
        console.log("calling the constructor")
        this.#name = n
        this.price = p
        this.rating = r
    }
    static custom() {
        console.log("Calling a Static Method")
        // static method  class k sath attached hote hai
        // inhe object k sath call nhi kiya ja skta
        // jihne agr class k bhar dikhan hai to member ka use krke hi end users ko dikaya ja skta hai
    }



    display() {
        console.log("Displaying the current product", this.#name, this.price, this.rating)
    }
}
const p = new Product('iphone', 10000, 5)
console.log("--------------------------------")


//  p.custom() -> produce error
//  kyuki static method ko hum object k sath use nhi kr skte
// static method class properties hoti hai
Product.custom()
// static method ko use class name k sath kiya ja skta hai

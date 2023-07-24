// static method

class Product {
    #rating
    constructor(n, p, r) {
        console.log("calling the constructor")
        this.name = n
        this.price = p
        this.#rating = r
    }
    static custom() {
        console.log("Calling a Static Method")
    }
    // Get and Set Method 
    //  Do more work on the Get and Set Method
    get gettingRating() {
        console.log(this.#rating)
    }
    set settingRating(r) {
        if (r < 0) return
        this.#rating = r
    }

    display() {
        console.log("Displaying the current product", this.name, this.price, this.#rating)
    }
}
const p = new Product('iphone', 10000, 5)
console.log("--------------------------------")
p.display()
Product.custom()
console.log("-----------------------------")
p.settingRating = 10
p.gettingRating


console.log("---------------------------------")

class complexNumber {
    #real
    #imag
    constructor(r, i) {
        this.#real = r
        this.#imag = i
    }
    get real() {
        return this.#real
    }
    get imag() {
        return this.#imag
    }
    addComplexNumber(c) {
        this.#real += c.real
        this.#imag += c.imag
    }

    display() {
        console.log(this.#real, " + i", this.#imag)
    }
}
const c1 = new complexNumber(2, 3)
c1.display()

const c2 = new complexNumber(4, 5)
c1.addComplexNumber(c2)
c1.display()
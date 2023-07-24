console.log("----------------------------------")
function createPromise() {
    return new Promise(function exec(resolve, reject) {
        setTimeout(function f() {
            console.log("Timer Done")
            resolve(10)
        }, 3000)
    })
}

async function consume() {
    // async lgate hi aapka output promise base output ban jayega
    console.log("inside function")
    const response = await createPromise()
    console.log("Response is", response)
}
consume()
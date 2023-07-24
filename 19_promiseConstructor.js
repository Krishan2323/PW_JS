console.log("---------------------------------------")

// promise ek trh k readable ehancer hai

// promise ek special object hai JS me

function createPromise() {
    // jb aap promise bna rhe ho na to iska constructor callback expect krta hai jise  hum executer callback khte hai
    return new Promise(function exec(resolved, reject) {
        // or yeh executer 2 function callback me leti hai jo resolved or reject hai
        // resolved or reject pass krne ki jarurat nahi hoti hai

        setTimeout(function f() {
            {
                console.log("Timer Done")
                resolved("Krishan")
                // jab resolved ko call krenge 
                // yeh resolved hmare promise object k binded hai
                // jse resolved function call hoga promise ko pta lg jayega 
                //  mera asynchrinous peace of code complte ho cuka hai
                // x.then ka callback function run ho jayega
                // promise object default state pending hoti 
                // jse hi resolved call hota hai uske state ho jati hai 
                // fulfilled

            }

        }, 3000);
    })
}

console.log("Start")
let x = createPromise()
console.log("Got a  new Promise")

x.then(function f() {
    console.log("Promise Done")
})

console.log("End")


for (let index = 0; index < 100000000; index++) { }

console.log("---------------------------------------")
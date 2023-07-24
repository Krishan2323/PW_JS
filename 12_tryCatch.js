// Try and Catch
console.log("---------------------------------")
// Errors 2 types k hote hai hai
// 1 Syntax Error :- jo humare program syntax error ho like misining semicolon
// 2 Rutime error :- yeh wo error hoti jb hum glt logic likh dete hai like 2/0

// code k logic agr glt hai hum use guard kr skte hai try and catch ki help se

// Try :- jo humare pass risky pieace of code of block hai use hum try block me rkhte hai (risky code mtlb jo sayad error produce kt deta) jse error produce hoga catch statement me pkd liya jayega

// catch :- catch block tbhi execute hota hai jb try block me koi error produce ho jaye or agr error nhi aayi thi catch block execute hoga hi nhi

// finally :- yeh code of block hai jo execute hoga hi hoga chaye arror aaye ya na


// Syntax

// try {
//       Risky pieace of code
//      Try Block of code for testing during the execution
// }
// catch {
//      Catch Block of code for addressing errors
// }
// finally{
//   block of code  that rum after try-catch
//   this is not depend on the try-catch
// }


try {
    let x = undefined
    console.log(x[0])
}
catch (error) {
    console.log("Error in catch block", error)
}
finally {
    console.log("Finally always gets excute")
}

console.log("end")


console.log("------------------------------")

try {
    console.log("Hello Krishan")
    console.log(a)
    console.log("Ending Try")
} catch (err) {
    console.log("Errors", err)
} finally {
    console.log("Finally")
}

console.log("-------------------------------------------")


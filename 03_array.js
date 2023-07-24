// Array
// Array is a ordered list of element
// Array is linear data structures


let arr = [1, 2, 3, 4, "Krishan", "Ankit"]
// array index start with 0
console.log(arr)

let b = new Array();
console.log(b)

let c = new Array(5);
console.log(c)

let d = new Array(1, 2, 3, 4, "Krishan")
console.log(d)


/*
given array :    [1,2,3,4,5]
indexes/postion: [0,1,2,3,4]
last index of array element = arr.length -1
every element int the array has assigned unique position/index

*/

let arr1 = [1, 2, 3, 4, 5, "Krishan", "Vishal"]
console.log(arr1[0])
console.log(arr1[2])
console.log(arr1[3])
console.log(arr1[4])
console.log(arr1[5])
console.log(arr1[6])

// Update Array

arr1[1] = 11
// here upadte the array index[1] 2 value replaces by 11
console.log(arr1[1])



console.log(arr1[55])
// if you try acces to not exist index then it will be undefined


console.log("---------------------------------------------------------------------")
// Array methods


// Push Method
let arr2 = [1, 2, 34, 5, 6, 7]
arr2.push(10, 44)
// add given element in  the last index in the array indexes 
// you can add multiple element using , seprated for ex -> (2,4,556,788)
// this will add in last indexes in the array
console.log(arr2)


//  -------------------------------------------------------------------------------- 


// Pop Method
let p = arr2.pop()
// if you want remove last index of the given array 
console.log(p)
// pop method the element jo isne delete kiya hai
console.log(arr2)


// ----------------------------------------------------------------------------


// Shift Method

let h = arr2.shift()
// if you want to remove first index of the array
console.log(h)
// shift method the element jo isne delete kiya hai
console.log(arr2)

// -------------------------------------------------------------------------

arr2.unshift(111)
// if you want to add element in the first inedx of the array
console.log(arr2)

// -------------------------------------------------------------------------

// Concat Method

let a1 = [1, 2, 3, 4, 5]
let a2 = [6, 7, 8, 9]
let a3 = a1.concat(a2)
// add two array  and it can  store in the new array
console.log(a3)

// ----------------------------------------------------------------------

// Join Method

let s = a3.join("|")
// add the given character in array  and convert into stringyfy
console.log(s)


// ---------------------------------------------------

// Reverse Method

a3.reverse()
// reverse the all index of array
console.log(a3)

// -------------------------------------------------------

// indexof

console.log(a3.indexOf(5))
// agr apko 5 element ka index pta krna hai the lekin 
// agr array me 5 elment store toh jo 5 element ka phle 
// index ayega wo hi ans hoga
// for ex [4,5,78,5] indexof = 1 
// of element nhi mila toh -1 return kr dega


// ------------------------------------------------------------

// Slice Method
let a4 = [1, 23, 4, 5, 67, 78, 8]
// agr hum ek array me particular item fetch krna hai
//  tb hum slice ka use krte hai 
//  is 2 parameter hote hai 
// starting index of ending-1 index
let a5 = a4.slice(2, 4)
console.log(a5)

// ----------------------------------------------------------

// Splice Method

a4.splice(2, 0, 222)
// spice method me 3 parameter hote hai 
//  1 parametr = konse index pe element add krna hai
//  2 parametr = kitne element remove krne hai
//  3 parametr = kya add krna hai arrray ki andar
console.log(a4)
let a6 = [1, 2, 3, 4, 5, 6]
a6.splice(2, 2, 222)
console.log(a6)
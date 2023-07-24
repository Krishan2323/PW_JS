// Regex or Regular Expressions

let pattern = 'pw'
let regExOne = new RegExp(pattern)
let flag = 'gi'
let regExTwo = new RegExp(pattern, flag)
let regExThree = /pw/gi

const strToCheck = "pw is growing at a rapid speed and recently they working an pwskills to create skills based pwcontent"


// Through regular expressions
const result = regExThree.test(strToCheck)
console.log(result)
// this give a boolean value

// Through the string 
const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult)

// Another Examle
const oneMoreResult = strToCheck.replace(regExThree, 'p - w')
console.log(oneMoreResult)


// use

const webUrl = "https://pwskills.com/hitesh%20choudhary"
const webUrl1 = "https://pwskills.com/hitesh%20choudhary"

const useAbleUrl = webUrl.replace(/%20/gi, '-')
const useAbleUrl1 = webUrl.replace(/%\d\d/gi, '-')
console.log(useAbleUrl1)
console.log(useAbleUrl)
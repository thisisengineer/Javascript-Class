// String and its function types:

const name = " Abhishek"
const repoCount  = 50

console.log(`My name is ${name } and my repo is ${repoCount}`)

const myName = new  String('Java Script')
console.log(myName[0]);
console.log(__proto__);
console.log(myName.length);
console.log(myName.anchor);
console.log(myName.charAt())// it returns first letter of string
console.log(myName.indexOf('t'));
console.log(myName.charCodeAt());

const newString = myName.substring(0, 4)
console.log(newString)

const newStringOne = myName.slice(-3, 4)
console.log(newStringOne)

const newStringTwo = "    coder   "  
console.log(newStringTwo)

const url = "https://coder.com/coder%30developer" //url.replace the one string  to another string
console.log(url.replace('%30', '_'))

console.log(url.includes('developer'))  // url.includes check a particular string available or not  and return value  { True or False}
console.log(url.includes('appDeveloper'))

console.log(myName.split('-')) // split the string in array through separator {Example ('-') is working here as a sparetor in this script})
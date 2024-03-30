//***************All about numbers************************ */

const score = 400; // this can return given datatypes[400]
console.log(score)

const num = new Number(100); // its return only specially number because here used number [Number: 100]
console.log(num)

//some interesting things 
console.log(num.toString()) // it will convert number to string :
console.log(num.toString().length) // .lenth return the no. of character used:
console.log(num.toFixed(4))//this return fixed value ex:- 100.0000

const newNum = 20.89
console.log(newNum.toPrecision(2))

const myNum = 1000000000000000;
console.log(myNum.toLocaleString('en-IN'))



//****************************All about Maths****************************** */

console.log(Math) // this console return like Object[Math] {}
console.log(Math.abs(-4))
console.log(Math.round(4.9)) // ceil and floor also becomes use in math console to round off the number 
console.log(Math.sqrt(100))

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random) * (max - min + 1) + min)


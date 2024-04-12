// // console.log("functions in java script")

// function myName(){
//     console.log("A")
//     console.log("B")
//     console.log("H")
//     console.log("I")
//     console.log("S")
//     console.log("H")
//     console.log("E")
//     console.log("K")
// }

// // myName() // for execution to function you have write like this using ()

// // function addTwoNumbers(number1 , number2){
// //     console.log(number1 + number2)
// // }
// // addTwoNumbers(3, 7)        //  it return addition  (10)
// // addTwoNumbers(3, "7")   //  it returns string (37)
// // addTwoNumbers(3, null)   // int returns only single value (3)
// // addTwoNumbers(3, "a")   //  // this is also return string (3a)

// function addTwoNumbers(number1 , number2){
//     // let result  = number1 + number2
//     return number1 + number2
// }

// // const result = addTwoNumbers(5 , 6)
// // console.log("result"  , result)  // this return result { like result , 8}


// function addTwoNumbers(number1 , number2){
// //    console.log(number1 + number2)
// }

// // const result2 = addTwoNumbers(5 , 6)
// // console.log("result"  , result2) // this return result undefined?

// function loggedInUser(username){
//     if(username === undefined)// you can write also this line like if(!username ) this work like same  
//     {
//         console.log("I kindly request please enter the username")
//         return
//     }
//     return `${username } You are logged in.`
// }

// console.log(loggedInUser()) // if you write console without giving value it return    {undefined}
// // console.log(loggedInUser("Abhishek Tiwari")) // if you write console  giving value it return    {username according to your value}

function calculateCartPrice(val1, val2, ...num1) // this ...num return all seprated number in one array: if you ar
// not using ...num its return only one vawlue of functon
// the meaning of using (val1, val2, ...num1) is its show first value take val1 and second value take
//val2 and rest of all value taken by ...num1.
{
   return num1
}
// console.log(calculateCartPrice(200, 400, 500)) 

const user = {
    username :" coder",
    price : "199"

}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

// handleObject({
    // username : "Abhishek",
    // price : 399
// })

const myNewArray = [200, 300, 400]
function returnSecondValue (getArray) {
return getArray[1]
}

console.log(returnSecondValue([200, 300, 400]))


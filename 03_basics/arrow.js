//this keyword means current contest:

const User = {
    username :  " Abhishek Tiwari",
    price : 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        // console.log(this) // this always talk about current context:

    }
}

// User.welcomeMessage()    // Abhishek Tiwari , welcome to website
// User.username= "Abhishek"
// User.welcomeMessage()    //Abhishek , welcome to website

// console.log(this) // this return only {}

// function chai(){
//     username : " Engineer "
//     console.log(this.username) // return undefined
// }

// chai()

//Explicit return here you use  return keyword
// Arrow function { => }
// const addTwo = (num1, num2) => {
//     return num1 +  num2
// }

// console.log(addTwo) //output like this [Function: addTwo]
// console.log(3, 4)   // output like 3 , 4
// console.log(addTwo(3, 4)) // output is 7

// Implicit return  write like below syntax: here you do not use return keyword 

// const addTwo = (num1, num2) => (num1 + num2)
// const addTwo = (num1, num2) => { username : " Engineer"} // return undefined 
const addTwo = (num1, num2) => ({ username : " Engineer"}) // return { username: ' Engineer' } because here used paranthesis
console.log(addTwo(3, 4))
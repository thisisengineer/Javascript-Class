// if
// comparison operator   <, >, <=, >=, ==, ===, != this all sign are comparison operator

// if("2" === 2){
    // console.log("exectuted")
// }
// 
    // console.log("not executed")
// 

// const score = 200;
// if(score > 100){
    // const power = "fly";
    // console.log(`I got power of ${power}`)
// }
// console.log(" Now i can fly yeehhhhh;" ) 

const loggedInUser = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if(loggedInUser && debitCard){
    console.log("You logged In")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Now you can shpping here")
}
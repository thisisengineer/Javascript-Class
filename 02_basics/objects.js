// objects literals

const newUser = {
    name : " Abhishek Tiwari",
    age : 19,
    location: " Uttar Pradesh",
    email: "iamengineerno.1@gmail.com",
    isLoggedIn : false,
}
//   console.log(newUser.name)
//   console.log(newUser["name"])  // 
//   console.log(newUser.age)
//   console.log(newUser["age"])

//   newUser.email = "thisisabhishektiwari@gmail.com" // by using dot you can change the exact value of the given datatype:
//   console.log(newUser.email)

// if you freeze the object you can't change the value 
// Object.freeze = newUser
// newUser.name = "king abhishek tiwari" // now here will not chane because you already using freeze ob
// console.log(newUser.name)

// create a function

newUser.greetings =  function(){
    console.log("Hello Viewers, God bless you")
    

}
newUser.greetingsTwo =  function(){
    console.log(`Hello Viewers,${this.name} God bless you `)
    

}
 console.log(newUser.greetings())
 console.log(newUser.greetingsTwo())
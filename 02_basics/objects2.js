const tinderUser = {}
 tinderUser.id = 2203051050032
 tinderUser.name  = " Abhsihek Tiwari"
 tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "iamabhsihek@gmail.com",
    fullname : {
        username: {
            firstName : "Abhishek",
            lastName: "Tiwari"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.username

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}

const obj4 = {obj1, obj2}
//console.log(obj4) // this obj4 return like this { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// but if you want to all value get in single curly bracket you have to use  { Object.assign (),} 
//const obj3 = Object.assign(obj1 , obj2)

const obj3 = { ...obj1 , ...obj2} // new object which return value like this { '1': 'a', '2': 'b' '3': 'c', '4': 'd' }
console.log(obj3)


// De- structure of objects
const course = {
    coursename : "Javascript",
    price : "free",
    courseinstructor : "Abhishek Tiwari",

}
const {courseinstructor: instructor} = course // Imp object remember it
console.log(course)
console.log(instructor)


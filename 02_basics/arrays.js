
 const Arr = [1, 2, 3, 4, 5]
console.log(Arr[0]) //this indecx returns  1:
console.log(Arr[1])  //this index returns  2:
console.log(Arr[2])  //this index returns  3:
console.log(Arr[3])  //this index returns  4:
console.log(Arr[4])  //this index returns  5:

const  Arr2 = new Array(1, 2, 3, 4, 5)
console.log(Arr2[1]) // this index returns 2:

// Array Methods:
Arr.push(6) // this mehtod add the element in array:
console.log(Arr)

Arr.pop() // this mehtod remove the element from array: Dont't need to enter value in bracket 
          // its automatically remove the last element of array:
console.log(Arr)

//Arr.unshift(0, 2, 3, 4) // this mehtod add the element at the 0 index:

 Arr.shift() //this method remove from  at the satarting point of array
console.log(Arr)

console.log(Arr.includes(9))

console.log(Arr.includes(3))

const newArr = Arr.join()// here used join array
console.log(Arr)
console.log(newArr)// this method return the newArr in stirng form
console.log(typeof newArr) // this mehtod return the type of newArr:

const newArray = Arr.splice(0, 3)
console.log(newArray)

const newArray2 = Arr.splice(0, 4)
console.log(newArray2)


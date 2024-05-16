// for 

// print 1 to 10 numbers
// for(let i = 0; i <=10; i++){
//     const element = i;
//     console.log(i)
// }
// 0 to 100 of tables:
// for(let i = 0; i <= 100; i++){
    // console.log(`Inner table is: ${i}`)
    // for(let j = 0 ; j <= 10; j++){
       // console.log(`inner table is ${j} and outer is ${i}`)
    //    console.log(i + '*' + j + '=' + i * j)
    // }
// }

// for loop using array
// let array = ['coder', 'trader', 'buisnessman', 'politicians']
// for(let i = 0; i < array.length ; i++){
//     const element = array[i]
//     console.log(element)
// }

//break and continue

for(let i = 0; i <= 20; i++){
    if(i == 5){
        console.log(`detected 5`)
        continue;
    }
    console.log(`value of i is: ${i}`)
    
}
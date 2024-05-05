// truthy any flasy values
// falsy values 
 // false , 0 , -0, null, undefined, BigInt 0n, [{""}(empty string)], (Nan Not a Number)

 // truthy values
 // "0", 'false', " ", [], {}, function(){}

 //nullish coaleshing operator ??:  its work on null and undefined

 let val1;
// val1 = 5 ?? 10; // return 5
// val1  = null ?? 10 // return 10
// val1 = undefined ?? 15 // return 15
// val1 = null ?? 5 ?? 10 // return 5
 //console.log(val1)

 // ternary operator
 // condition ?? ture : false

 const teaPrice = 120;
 teaPrice <=80  ? console.log("kharid lunga") : console.log("Mai nahi kharidunga ye toh mehnga hai bhai")

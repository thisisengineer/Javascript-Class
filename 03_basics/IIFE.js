// IIFE :- Immediately invoked functrion expression
// Named iife
(
    function code() {
        console.log(`DB Connect`)
    }
)(); // If you have to write another function  use semicolon otherwise your next function will through error. 

(
    function code2
    () {
        console.log(`DB Connect`)
    }
)();

// you can use arrow function also:
// Unnamed iife
(

    ( name ) => {
        console.log(`DB Connect ${name}`)
    }
)('Coder')
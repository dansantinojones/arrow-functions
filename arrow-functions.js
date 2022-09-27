/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumber(a, b) {
    // code block 
    return a + b
}
let sum = addTwoNumber(3, 5);
console.log(sum);




// Arrow Function With Parameters
const addTwoNumber = (a, b) => {
    return a + b 
}
let sum = addTwoNumber(3, 5);
console.log(sum);




// Single Line Arrow Function With Parameters
// const addTwoNumber2 = (a, b) => (a + b); is also valid 
const addTwoNumber2 = (a, b) => a + b;
let sum2 = addTwoNumber2(6, 4);
console.log(sum2);



// Implicit Returns
// does not need () as only 1 parameter 
const saySomething = message => console.log(message);
saySomething("Hello there!!!");




// No parameters 
// Use empty () to tell JS you are declaring function
const sayHello = () => console.log("hello!");
sayHello();




// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines);

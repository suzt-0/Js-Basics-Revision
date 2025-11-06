// Functions:

// A function is a reusable block of code that performs a specific task.
// Functions help to organize code, make it more readable, and avoid repetition.

// Syntax of a function:

function functionName(parameters) {
    // Code to be executed
    return result; // Optional
}

// Example of a simple function that adds two numbers:

function add(a, b) {
    return a + b;
}

// Calling the function
let sum = add(5, 3); // sum will be 8

// Functions can also have no parameters and no return value:

function greet() {
    console.log("Hello, World!");
}

greet(); // Outputs: Hello, World!

// Functions can also be assigned to variables:

const multiply = function(x, y) {
    return x * y;
};

let product = multiply(4, 6); // product will be 24

// Arrow functions (ES6 syntax):

    //Syntax:
    const functionName = (parameters) => {
    // Code to be executed
    return result; // Optional
    };

const divide = (m, n) => {
    return m / n;
};


let quotient = divide(20, 4); // quotient will be 5

// If the function has a single parameter and a single expression, it can be further simplified:

const square = x => x * x;

let squaredValue = square(5); // squaredValue will be 25

// Functions can also have default parameters:

function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

let squared = power(3); // squared will be 9
let cubed = power(3, 3); // cubed will be 27

// Functions are a fundamental building block in programming and are widely used in all JavaScript applications.    


// *****************************************************************************************************************************



// Advanced Function Concepts:

// 1. Higher-Order Functions: Functions that take other functions as arguments or return functions as their result.

function applyOperation(a, b, operation) { // operation is a function passed as an argument
    return operation(a, b); // operation is a function passed as an argument 
}

let result = applyOperation(10, 5, add); // (parameter,parameter, function) parameters:10,5 function:add
console.log(result); // Outputs: 15 



// 2. Closures: A closure is a function that retains access to its lexical scope 
//    even when the function is executed outside that scope.

function makeCounter() {

    let count = 0; // count is a variable in the lexical scope of makeCounter

    return function() { // returning an inner function
        count++; // inner function has access to count
        return count;
    };
}

let counter = makeCounter(); // counter is now a function that increments count

console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3

// 3. Recursion: A function that calls itself to solve a problem.

function factorial(n) {
    if (n <= 1) {
        return 1; // Base case
    } else {
        return n * factorial(n - 1); // Recursive case
    }
}

let fact5 = factorial(5); // fact5 will be 120 (5 * 4 * 3 * 2 * 1)

console.log(fact5); // Outputs: 120

// Functions are a powerful feature in JavaScript, enabling developers to create modular, maintainable, and efficient code. 

// *****************************************************************************************************************************

// Special Function Types:

// 1. Immediately Invoked Function Expressions (IIFE): 
//    A function that is executed immediately after it is defined.

(function() {
    console.log("This function runs immediately!");
})();


// 2. Generator Functions: Functions that can be paused and resumed, allowing for the generation of a sequence of values.

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();

console.log(gen.next().value); // Outputs: 1
console.log(gen.next().value); // Outputs: 2
console.log(gen.next().value); // Outputs: 3

// 3. Async Functions: Functions that return a Promise and can use the await keyword to pause execution until a Promise is resolved.

async function fetchData() {
    let response = await fetch('https://api.kanye.rest/');
    let data = await response.json();
    return data;
}

fetchData().then(data => console.log(data)); // Outputs the fetched data from the API

// These special function types provide additional capabilities for handling asynchronous operations, managing state, and creating modular code structures in JavaScript.

// *****************************************************************************************************************************

//Scopes and how it affects functions:

// 1. Global Scope: 
// Variables declared outside any function are in the global scope and can be accessed from anywhere in the code.

let globalVar = "I am global";

function showGlobalVar() {
    console.log(globalVar); // Accessing global variable
}

showGlobalVar(); // Outputs: I am global

// 2. Local Scope: 
// Variables declared within a function are in the local scope and can only be accessed within that function.

function localScopeExample() {
    let localVar = "I am local";
    console.log(localVar); // Accessing local variable
}

localScopeExample(); // Outputs: I am local
// console.log(localVar); // Error: localVar is not defined

// 3. Block Scope: 
// Variables declared with let or const inside a block (e.g., inside an if statement or loop) are in block scope.

function blockScopeExample() {
    if (true) {
        let blockVar = "I am block scoped";
        console.log(blockVar); // Accessing block-scoped variable
    }
    // console.log(blockVar); // Error: blockVar is not defined
}

blockScopeExample(); // Outputs: I am block scoped

// Understanding scopes is crucial for managing variable visibility 
// and avoiding naming conflicts in functions and other code blocks in JavaScript.

// *****************************************************************************************************************************


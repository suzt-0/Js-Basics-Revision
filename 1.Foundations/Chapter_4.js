//Hoisting and Closures

// 1. Hoisting: In JavaScript, function declarations are hoisted to the top of their containing scope. 
//    This means you can call a function before it is defined in the code.
//    simply its just calling a function before its declaration.
//    hoisting is possible because of the way JavaScript interprets code. 
//    During the compilation phase,
//    function declarations are moved to the top of their scope, allowing them to be called before they appear in the code.


console.log(greet("Alice")); // Outputs: "Hello, Alice!"

function greet(name) {
    return "Hello, " + name + "!";
}

//Another example of hoisting with variable declarations:

console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5

// In this example, the declaration of 'x' is hoisted, but its assignment is not. 
// Therefore, when we log 'x' before the assignment, it outputs 'undefined'.


//************************************************************************************************************


// 2. Closures: 
//    A closure is a function that retains access to its lexical scope, 
//    even when the function is executed outside that scope.
//    This means that a closure can "remember" the environment in which it was created.

//    Lexical scope is a facy way of saying that functions are executed using the variable scope
//    that was in place when they were defined, not the scope in place when they are invoked.

function makeCounter() {
    let count = 0; // 'count' is a variable in the lexical scope of 'makeCounter'

    return function() { // This inner function is a closure
        count++; // It has access to 'count'
        return count;
    };
}

const counter = makeCounter();  
console.log(counter()); // Outputs: 1
console.log(counter());
console.log(counter()); // Outputs: 3

// In this example, the inner function returned by 'makeCounter' is a closure. 
// It retains access to the 'count' variable even after 'makeCounter' has finished executing. 
// Each time we call 'counter()', it increments and returns the value of 'count'.

// Closures are commonly used for data encapsulation, creating private variables, 
// and implementing function factories in JavaScript.


// Another example of closure:

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');

// In this example, 'innerFunction' is a closure that has access to 'outerVariable' 
// from its lexical scope, even when called outside of 'outerFunction'.
// When we call 'newFunction', it logs both the outer and inner variables.
// This demonstrates how closures can capture and remember variables from their defining scope.


// Things to remember about closures:

// 1. Closures can access variables from their outer (enclosing) function's scope.
// 2. Closures can be used to create private variables and methods.
// 3. Each closure maintains its own scope, allowing for data encapsulation.
// 4. Closures are created every time a function is created, at function creation time.
// 5. Closures can lead to memory leaks if not managed properly, as they keep references to variables in their scope.
// 6. To ensure Closures donot lead to memory leaks, it is important to avoid creating unnecessary closures 
//    and to nullify references to closures when they are no longer needed. 
// eg:

function createClosure() {
    let largeData = new Array(1000000).fill('some data'); // Simulating large data

    return function() {
        console.log('Using large data');
    };
}

let closureFunction = createClosure();
// Use the closureFunction as needed
closureFunction();

// When done with the closure, nullify the reference to allow garbage collection
closureFunction = null;

// By nullifying the reference to 'closureFunction', we allow the garbage collector 
// to reclaim the memory used by 'largeData' when it is no longer needed.   

// This helps prevent memory leaks in applications that create many closures over time. 


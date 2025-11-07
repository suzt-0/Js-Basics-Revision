//********************SYNATAX AND TYPES IN JAVASCRIPT********************

// This chapter is a short revision of JavaScript syntax and types.

// JS Features :
// ################################################
// -> it is dynamically typed
// ie ., variable types are determined at runtime
// eg:
let x = 42;      // x is a number
x = "hello";    // now x is a string
x = true;     // now x is a boolean
// hence it can hold any type of value at any given time during execution

// ################################################
// -> it is weakly typed
// ie ., implicit type conversions are allowed
// eg:
let a = "5";    // a is a string
let b = 10;     // b is a number
let c = a + b;  // c is "510" (string concatenation)
let d = a * b;  // d is 50 (string "5" is converted to number 5)

// ################################################
// -> it is prototype-based
// ie ., objects can inherit properties and methods from other objects
// eg:
let parent = {
    greet: function() {
        console.log("Hello from parent!");
    }
};

let child = Object.create(parent);
child.greet(); // Output: Hello from parent!
// Note:[although it is said to be class and object it is simply prototype based inheritance 
// with syntactic sugar for classes introduced in ES6]

// ################################################
// -> it is interpreted language
// ie ., code is executed line by line without prior compilation
// eg:
console.log("Hello, World!"); // Output: Hello, World!
// it doesn't require a separate compilation step before execution


// ################################################
// -> it is multi-paradigm language
// ie it supports various programming styles like pop, oop and functional programming
// eg:
    
    // Procedural Programming
function add(x, y) {
    return x + y;
}
console.log(add(5, 10)); // Output: 15

    // Object-Oriented Programming
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
let john = new Person("John");
john.greet(); // Output: Hello, my name is John

    // Functional Programming
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(n => n * n);
console.log(squared); // Output: [1, 4, 9, 16, 25]

// ___________________________________________________________________________

//********************  Primitived  Types  ********************//
// There are 7 primitive types in JavaScript:

// 1. Number: Represents both integer and floating-point numbers.
let num = 42; // Example of a number

// 2. String: Represents a sequence of characters.
let str = "Hello, World!"; // Example of a string

// 3. Boolean: Represents a logical entity that can be either true or false.
let bool = true; // Example of a boolean

// 4. Undefined: Represents an uninitialized variable or absence of value.
let undef; // Example of undefined [it is default value of any uninitialized variable]

// 5. Null: Represents the intentional absence of any object value.
let nll = null; // Example of null

// 6. Symbol: Represents a unique identifier, often used as object property keys.
let sym = Symbol("unique"); // Example of a symbol
// in simple terms it is used to create unique idetifiers for object properties to avoid name collisions

// 7. BigInt: Represents integers with arbitrary precision.
let bigInt = 9007199254741991n; // Example of a BigInt
// it is used for very large integers beyond the safe limit of the Number type

// Note: All primitive types are immutable, meaning their values cannot be changed once created.
// Any operation on a primitive type results in the creation of a new value.

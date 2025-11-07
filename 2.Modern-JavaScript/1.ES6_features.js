//ES6+ features: let, const, arrow functions, template literals, destructuring, etc.



//----------------------------------------------------------------------------
//Let and Const: 
// Let allows block-scoped variables, Const is for constants.

//Let:

// by block scope we mean that let variables are only accessible 
// within the block they are defined in (e.g., inside a function or loop).
// eg:
for (let i = 0; i < 5; i++) {
  console.log(i); // i is accessible here
}
// console.log(i); // Error: i is not defined


//Const:
// Const variables cannot be reassigned after their initial assignment.
// However, if a const variable holds an object or array, 
// the contents of that object or array can still be modified.
// eg:
const pi = 3.14;
// pi = 3.14159; // Error: Assignment to constant variable.

const arr = [1, 2, 3];
arr.push(4); // This is allowed
console.log(arr); // Output: [1, 2, 3, 4]

//----------------------------------------------------------------------------

//Arrow Functions:
// a simple and quick way to write functions using the "=>" syntax.
// They also lexically bind the "this" value, 
// meaning they inherit "this" from the surrounding code context.

//eg:
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

//usage of "this" in arrow functions:
const obj = {
  value: 10,
  getValue: function() {
    const innerFunc = () => this.value; // 'this' refers to obj
    return innerFunc();
  }
};
console.log(obj.getValue()); // Output: 10

//----------------------------------------------------------------------------


//Template Literals:
// Template literals allow for easier string interpolation and multi-line strings.
// They use backticks (`) instead of single or double quotes.
//eg:
const name = "Alice";
const greeting = `Hello, ${name}! Welcome to ES6 features.`;
console.log(greeting); // Output: Hello, Alice! Welcome to ES6 features.

const multiLine = `This is line one.
This is line two.
This is line three.`;
console.log(multiLine);

//----------------------------------------------------------------------------

//Destructuring:
// Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
//eg:

//Array Destructuring:
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first, second, third); // Output: 1 2 3

//Object Destructuring:
const person = { name: "Bob", age: 25 };
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // Output: Bob 25   

//----------------------------------------------------------------------------

//Summary:
//Let: Block-scoped variables.
//Const: Constants that cannot be reassigned.
//Arrow Functions: Concise function syntax with lexical "this" binding.
//Template Literals: Enhanced string handling with interpolation and multi-line support.
//Destructuring: Easy extraction of values from arrays and objects.
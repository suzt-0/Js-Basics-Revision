// Operators and control flow in JavaScript

// ************************************************//

// Operators

// 1. Arithmetic Operators
let x = 10;
let y = 3;

console.log(x + y); // Addition: 13
console.log(x - y); // Subtraction: 7
console.log(x * y); // Multiplication: 30
console.log(x / y); // Division: 3.3333...
console.log(x % y); // Modulus: 1
console.log(x ** y); // Exponentiation: 1000

// 2. Comparison Operators
console.log(x == y); // Equal to: false
console.log(x != y); // Not equal to: true
console.log(x > y);  // Greater than: true
console.log(x < y);  // Less than: false
console.log(x >= y); // Greater than or equal to: true
console.log(x <= y); // Less than or equal to: false

// 3. Logical Operators
let a = true;
let b = false;

console.log(a && b); // Logical AND: false
console.log(a || b); // Logical OR: true
console.log(!a);     // Logical NOT: false

// ************************************************//   

// Control Flow

// 1. If-Else Statement
let age = 20;

if (age < 18) {
    console.log("Minor");
} else if (age >= 18 && age < 65) {
    console.log("Adult");
} else {
    console.log("Senior");
}

// 2. Switch Statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";     
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName); // Output: Wednesday

// 3. For Loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// 4. While Loop
let count = 0;
while (count < 5) {
    console.log(count); // Output: 0, 1, 2, 3, 4
    count++;
}

// 5. Do-While Loop
let numCount = 0;
do {
    console.log(numCount); // Output: 0, 1, 2, 3, 4
    numCount++;
} while (numCount < 5);

// ************************************************//


//Special Operators 

// 1. Ternary Operator
let isMember = true;
let discount = isMember ? 0.1 : 0; // 10% discount for members
console.log(`Discount: ${discount * 100}%`); // Output: Discount: 10%

// 2. Nullish Coalescing Operator
let userInput = null;
let defaultValue = "Default";
let finalValue = userInput ?? defaultValue; // Uses defaultValue since userInput is null
console.log(finalValue); // Output: Default

// 3. Optional Chaining Operator
let user = {
    name: "Alice",
    address: {
        city: "Wonderland"
    }
};
let cityName = user.address?.city; // Safely access city property
console.log(cityName); // Output: Wonderland

let zipCode = user.address?.zipCode; // zipCode is undefined, but no error thrown
console.log(zipCode); // Output: undefined

// 4. Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // Combines arr1 with additional elements
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // Combines obj1 with an additional property
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }

// 5. Destructuring Assignment
let point = { x: 10, y: 20 };
let { x: xCoord, y: yCoord } = point; // Extracts x and y into variables
console.log(`X: ${xCoord}, Y: ${yCoord}`); // Output: X: 10, Y: 20

let colors = ["red", "green", "blue"];
let [firstColor, secondColor] = colors; // Extracts first two colors into variables
console.log(`First: ${firstColor}, Second: ${secondColor}`); // Output: First: red, Second: green

// ************************************************//

// How logical operators work with non-boolean values

// 1. Logical AND (&&)
console.log(0 && "Hello"); // Output: 0 (falsy value)
console.log("World" && 42); // Output: 42 (truthy value)

// 2. Logical OR (||)
console.log(null || "Default"); // Output: Default (falsy value)
console.log("Value" || 100); // Output: Value (truthy value)

// 3. Logical NOT (!)
console.log(!0); // Output: true (0 is falsy)
console.log(!"Hello"); // Output: false (non-empty string is truthy)

// how to use logical opertors as cotrol flow mechanisms

let userStatus = "active";

// Using Logical AND (&&) for conditional execution
userStatus === "active" && console.log("User is active"); // Output: User is active


// Using Logical OR (||) for default assignment
let username = null;
let displayName = username || "Guest";
console.log(`Hello, ${displayName}`); // Output: Hello, Guest

// Using Logical NOT (!) for toggling a boolean value
let isOnline = false;
isOnline = !isOnline;
console.log(`Is user online? ${isOnline}`); // Output: Is user online? true

// ************************************************//

// Summary:

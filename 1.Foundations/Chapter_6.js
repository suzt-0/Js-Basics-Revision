// Developer tools for JavaScript and how to use them effectively
// most of the tools that are needed for debugging are built into modern web browsers
// such as Google Chrome, Firefox, and Microsoft Edge.
// These tools provide a variety of features to help developers identify and fix issues in their code.
// Below are some common debugging tools and techniques:

/*********************************************************************************** */


// 1. Console Logging
// The console object provides access to the browser's debugging console.
// You can use various methods to log information, warnings, errors, and more.
// Here are some examples:

console.log("Hello, Developer Tools!");// Standard log message


// Warning Messages and Errors
// You can use console.warn to log warning messages
// and console.error to log error messages.
console.warn("This is a warning message.");// Warning message, usually highlighted in yellow
console.error("This is an error message."); // Error message, usually highlighted in red

// Informational Messages
// You can use console.info to log informational messages
// which are typically used to convey general information to the user.
console.info("This is an informational message.");// Informational message

// Debugging
// You can use console.debug to log messages that are useful for debugging
// will be logged during development but can be ignored in production environments.
console.debug("This is a debug message.");// Debug message, useful for development

//Tabular Data
// You can display data in a table format for better readability
let users = [{name: "Alice", age: 30}, {name: "Bob", age: 25}];

console.table(users);// Display data in a table format

//Grouping Console Messages 
// You can group related messages together for better organization
console.group("Grouped Messages- Example Group");// Start a new group in the console
console.log("Message 1");// Log message within the group
console.log("Message 2");// Log another message within the group
console.groupEnd();// End the group


// 2. Breakpoints


// Breakpoints allow you to pause the execution of your code at a specific line
// so you can inspect variables and the call stack.
// You can set breakpoints directly in the browser's developer tools
// by clicking on the line number in the source code view.
// or in the ide that you are using.
// <-- Set a breakpoint by clicking on the red dot next to the line number
//then run the code in debug mode to pause execution at that line.

// Example function to demonstrate breakpoints
function calculateSum(a, b) {
    let sum = a + b; // Set a breakpoint on this line to inspect 'a', 'b', and 'sum'
    return sum;
}

let result = calculateSum(5, 10);
console.log("Sum:", result);// Log the result of the calculation


// 3. Inspecting Variables and Call Stack

// When execution is paused at a breakpoint, you can inspect the values of variables
// in the current scope and view the call stack to see how the code reached that point.
// Use the developer tools' "Scope" and "Call Stack" panels to explore these details.
// You can hover over variables in the source code to see their current values
// or use the console to evaluate expressions in the current context.
// Example function to demonstrate variable inspection
function multiply(x, y) {
    let product = x * y; // Set a breakpoint here to inspect 'x', 'y', and 'product'
    return product;
}

let output = multiply(4, 6);
console.log("Product:", output);// Log the result of the multiplication


// 4. Network Monitoring

// The Network panel in developer tools allows you to monitor network requests
// made by your application, including AJAX calls, resource loading, and more.
// You can inspect request and response headers, status codes, payloads, and timings.
// This is useful for debugging issues related to data fetching and performance.
// Example of making a network request using Fetch API
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        console.log("Fetched Data:", data);// Log the fetched data
        // console.table(data);// Display fetched data in a table format
    })
    .catch(error => {
        console.error("Error fetching data:", error);// Log any errors that occur during the fetch
    }); 



// 5. Performance Profiling

// The Performance panel allows you to record and analyze the performance of your application.
// You can identify bottlenecks, measure load times, and optimize rendering and scripting.
// Use the "Record" button to start profiling, interact with your application,
// and then stop recording to analyze the results.
// Example of a function that may impact performance
function intensiveTask() {
    let total = 0;
    for (let i = 0; i < 1e6; i++) {
        total += i;
    }
    return total;
}

let intensiveResult = intensiveTask();
console.log("Intensive Task Result:", intensiveResult);// Log the result of the intensive task  


// 6. Source Maps

// Source maps are files that map minified or transpiled code back to the original source code.
// They allow you to debug your original code even when running minified versions in production.
// Ensure that your build process generates source maps and that they are accessible in the developer tools.
// Example: If you are using a tool like Babel or Webpack, enable source map generation
// in your configuration to facilitate debugging of your original source code.  
// This is typically done in the build configuration files and not directly in the JavaScript code.
// For example, in Webpack, you can set the devtool option to 'source-map':
// module.exports = {
//     // Other configuration options...
//     devtool: 'source-map',
// };
// With source maps enabled, you can set breakpoints and inspect your original code
// even when running the minified version in the browser.


//*********************************************************************************** */

// Summary:
// Console Messages: 
//      Display various types of messages using console.log, console.warn, console.error, etc.

// Breakpoints: 
//      Pause code execution at specific lines to inspect variables and the call stack.

// Inspecting Variables and Call Stack: 
//      Examine variable values and the call stack when execution is paused.

// Network Monitoring: 
//      Monitor network requests and responses using the Network panel.

// Performance Profiling: 
//      Analyze application performance to identify bottlenecks.

// Source Maps: 
//      Use source maps to debug original source code even when minified or transpiled. 
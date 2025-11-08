// Sync and Async in js

// unlike other commonly used programming languages 
// javascript is asyncronous that means js runs non sequentially 
// and executes code based on what can be done at the moment of execution
// rather than on which sequence the code has been given to be executed 

// Concept of single threaded program execution :

// this happens because javascript is single threaded langauge 
// and only uses one thread to execute all the code 
// if the thread is stuck in one task it will be impossible to execute the entire program 

//Some scenarios might occur if a code block takes too much time it might stuck the program 
//but not in the case of js it is non-blocking by nature ie it will continue executing the code 
// and if something's taking long time it will be taken care later on 

//In technical terms:
// Main code program is executed by usinng the call stack that determines the execution process of 
// main thread of the js
// while tasks like fetching data, timers and event listeners are handled by the Web APIs 
// Web APIs are handled by the browser
// When Web APIs complete the task the callback for that task are then put on event queue
// when the call stack is empty it will look into the event queue for the callbacks and then they are execution 

// event loop is mechanism that allows the collaboration of call stack and event queue
// it continiously checks the call stack and event queue to allow the call stack to execute callbacks of queue when its empty


//[JavaScript has an asynchronous runtime environment. That means JS language itself is synchronous, 
// but the environment (browser/Node.js) provides asynchronous capabilities (Web APIs)
//  to keep the single thread non-blocking.]
//************************************************************************/

//Syncronous Code Execution:

// Why needed?
// -> sometimes we want to ensure that some code blocks gets executed before others do which is challenging given the 
//    non-blocking nature of javascript runtime environment it will just run past some tasks and execute others
// -> like database connection code, we would surely prefer that we connect to a database before calling tables 
// -> at such cases we need synchronous code execution ensuring that code will be executed sequentially
// -> Use the **async/await** syntax (or Promise chaining) to pause the execution of the async function until the required resource is ready.
// -> This *mimics* synchronous flow without blocking the main Call Stack.






// Promise: 

/**
 * A Promise is a JavaScript object that represents the eventual completion (or failure) 
 * of an asynchronous operation and its resulting value. It acts as a placeholder 
 * for a value that is not yet known.
 *
 * Promises ensure sequential flow for asynchronous code without blocking the main thread.
 *
 * Promise States:
 * 1. PENDING: Initial state, neither fulfilled nor rejected. The asynchronous operation is running.
 * 2. FULFILLED (RESOLVED): The operation completed successfully, and the Promise has a resulting value.
 * 3. REJECTED: The operation failed, and the Promise has a reason for the failure (an error object).
 */

// -----------------------------------------------------------

// 1. CREATING A PROMISE:
const myPromise = new Promise((resolve, reject) => {
    // This function (the executor) runs immediately.

    const success = true; // Simulating an async operation status, e.g., network request status

    // Simulating the time it takes for an async operation (e.g., fetch, setTimeout)
    setTimeout(() => {
        if (success) {
            // If the operation is successful, call resolve() with the result value.
            resolve("Data successfully retrieved from the server.");
        } else {
            // If the operation fails, call reject() with an error reason.
            reject(new Error("Failed to connect to the server."));
        }
    }, 2000); // 2-second simulated delay
});

// -----------------------------------------------------------

// 2. CONSUMING A PROMISE (Handling the Result/Error):

console.log("Promise initiated (State: PENDING)...");

myPromise
    // .then() handles the FULFILLED (RESOLVED) state.
    // It receives the value passed to the resolve() function ("Data successfully retrieved...").
    .then((resultValue) => {
        console.log("Success Handler (FULFILLED):");
        console.log(resultValue); // Logs the successful data/message

        // **Promise Chaining:** Returning a value from a .then() returns a new Promise
        // that resolves with that value, enabling sequential operations.
        return "Processed " + resultValue;
    })
    // Another .then() can be chained to process the result of the previous .then().
    .then((processedValue) => {
        console.log("Chained Handler:");
        console.log(processedValue);
    })
    // .catch() handles the REJECTED state (any error from the Promise or any preceding .then()).
    .catch((error) => {
        console.error("Error Handler (REJECTED):");
        console.error(error.message); // Logs the error reason
    })
    // .finally() runs regardless of whether the Promise was fulfilled or rejected.
    .finally(() => {
        console.log("Cleanup complete. Promise settled.");
    });


console.log("This synchronous line runs immediately, before the 2-second timer expires!");



//Promise Syntax:

// Define the promise:

const thePromise = new Promise((resolve, reject) => {
    //Define the activity that will respond in true or false results
    // like: connection requests

    //for testing lets assume the condition is true
    let condition = true

    if (condition) {
        //resolve the promise if the condition was met 
        resolve("The promise achieved what it intended to do.")

    }
    else {
        reject("The promise failed to reach its intended purpose")
    }
});



//Now use the Promise to do your thing, often known as consuming the promise 


thePromise
.then((result)=>{ //executed if the promise was accepted 
    console.log("Promise has been fullfilled!!")
    return "Hello"
})
.then((nextValue)=>{
    console.log("Chaining the activities to do somethings")
})
.catch((error)=>{ //executed if promise was rejected 
    console.error("The promise was rejected under", error.message)
})
.finally(()=>{ //will be executed even if the code was rejected or accepted
    console.log("The promise is complete.")
})











//****************************************************************************************************/

//Async/await()


//  async/await is modern JavaScript syntax built on Promises. It allows you to write 
//  asynchronous code in a way that looks and feels like synchronous code, making
//  complex sequences of operations much cleaner and easier to read.

//  1. 'async' Keyword:
//  - Must precede a function declaration (function, arrow, or method).
//  - It signals the function contains 'await' and automatically ensures the function returns a **Promise**.

async function fetchData(url) {
    console.log("Starting operation...");

    try {
        // 2. 'await' Keyword:
        //    - Can ONLY be used inside an 'async' function.
        //    - It precedes a Promise (like one returned by 'fetch').
        //    - It **pauses the execution of THIS ASYNC FUNCTION** until the Promise resolves.
        //    - Crucially: It does NOT block the main JavaScript thread (Call Stack),
        //      allowing the browser/runtime to remain responsive.

        // PAUSE 1: Wait for the network response
        const response = await fetch(url); //fetch allows us to fetch the data from the given api url 

        // PAUSE 2: Wait for the response body to be parsed as JSON
        const data = await response.json();

        console.log("Data received and processed sequentially.");
        return data; // This value is returned wrapped in a resolved Promise
    } catch (error) {
        // Use a standard try...catch block to handle rejected Promises (errors).
        console.error("An error occurred:", error);
        // Throwing an error here automatically rejects the outer Promise
        throw error;
    }
}

// How to call the async function:
const data = fetchData('https://api.sampleapis.com/coffee/hot')
    .then(result => {
        console.log("Final result processed successfully.");
        console.log("Fetched data : ", result[0])
    })
    .catch(err => {
        // Handles the thrown error from the catch block above
        console.error("Final catch handler.");
    });

console.log("This line runs IMMEDIATELY, demonstrating non-blocking behavior.");





// Asynchronus JavaScript 


/**
 * 
 *  1 - Callbacks
 *  2 - Promises
 *  3 - Async/Await
 * 
 */

// Callbacks

// function fetchData(callback) {

//     console.log("Fetching data in 2 seconds...");

//     // setTimeout simulates an asynchronous operation, such as fetching data from a server
//     // syntax : setTimeout(function, delay/timer)

//     setTimeout(() => {
//         const data = "Data fetched from server";
//         callback(data);
//     }, 2000);
// }

// fetchData((value) => {
//     console.log(value);
// });

function sum (a, b, callback) {
    const result = a + b;
    callback(result);
}

printSum = (result) => {
    console.log("The sum is:", result);
}

sum(5, 10, printSum);
sum(10,20, printSum);
sum(15, 25, printSum);
sum(20, 30, printSum);

// sum(5, 10, (result) => {
//     console.log("The sum is:", result);
// });

// sum is high-order function (HOF) that takes a callback as an argument and executes it after performing the addition operation.
// printSum is a callback function that is passed to sum and is executed once the sum of a and b is calculated.
//  The result is then logged to the console.


// fetchData is called with a callback function that will be executed once the data is fetched.
// After 2 seconds, the callback function is called with the fetched data, which is then logged to the console.
// over here fetchData is a higher-order function (HOF) that takes a callback as an argument and executes it
//  after the asynchronous operation is complete.

// --------------------------------- Promises ---------------------------------

/** 
 * 
 * Synatx of Promise:
 * 
 * const promise = new Promise((resolve, reject) => {
 *     // Asynchronous operation
 *      if (success) {
 *        resolve(result); // If the operation is successful, call resolve with the result
 *     } else {
 *       reject(error); // If the operation fails, call reject with an error message
 *    }
 * 
 * });
*   promise.then(result => {
 *     // Handle the result of the promise
 * }).catch(error => {
 *     // Handle any errors that occurred during the promise execution
 * }
 */

// function fetchDataPromise() {

//     const promise = new Promise((resolve, reject) => {
//         console.log("Fetching data...");

//         let success = false; // Simulating a successful operation
//         setTimeout(() => {
//             const data = "Data fetched from server";
//             const errorMessage = "No data found";

//             if (success) {
//                 resolve(data);
//             } else {
//                 reject(errorMessage);
//             }
//         }, 2000);
//     });

//     return promise;
// }   

// fetchDataPromise()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });

// In this example, fetchDataPromise creates a new Promise that simulates an asynchronous operation using setTimeout.
// The promise is resolved with the fetched data after 2 seconds. The .then() method is used to handle the resolved value,
// while the .catch() method is used to handle any potential errors that may occur during the promise execution.


// --------------------------------- Async/Await ---------------------------------

// async function fetchDataPromise() {

//     const promise = new Promise((resolve, reject) => {
//         console.log("Fetching data...");

//         let success = true; // Simulating a successful operation
//         setTimeout(() => {
//             const data = "Data fetched from server";
//             const errorMessage = "No data found";

//             if (success) {
//                 resolve(data);
//             } else {
//                 reject(errorMessage);
//             }
//         }, 2000);
//     });

//     let result = await promise; // Await the resolution of the promise
//     return result;
// }   

// fetchDataPromise()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });

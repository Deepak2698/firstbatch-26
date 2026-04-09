// // array is a data structure that can hold multiple values at once.
// //  In JavaScript, arrays are dynamic and can hold elements of any type.

//  let arr = [1, 'Hello', true, 4.89, 5,undefined, null];

// // Accessing elements
// // console.log(arr[0]); // Output: 1
// // console.log(typeof arr[2]); // Output: boolean

// // Modifying elements
// // arr[1] = 'World';
// // console.log(arr[1]); // Output: World

// // length of the array
// // console.log(arr.length); // Output: 7
// // console.log(arr[arr.length-4]); // Output: 4.89

// //---------------------------------------------------------// Array Methods

// // push() - adds an element to the end of the array
//  arr.push('New Element');
//  console.log(arr); // Output: [1, 'World', true, 4.89, 5, undefined, null, 'New Element']

// // pop() - removes the last element from the array
//  arr.pop();
//  console.log(arr); // Output: [1, 'World', true, 4.89, 5, undefined, null]
 
// // shift() - removes the first element from the array
//  arr.shift();
//  console.log(arr); // Output: ['World', true, 4.89, 5, undefined, null]

// // unshift() - adds an element to the beginning of the array
//  arr.unshift('First Element');
//  console.log(arr); // Output: ['First Element', 'World', true, 4.89, 5, undefined, null]

// // indexOf() - returns the index of the first occurrence of an element
//  console.log(arr.indexOf(true)); // Output: 2

// // includes() - checks if an element is present in the array
//  console.log(arr.includes(4)); // Output: true

// // slice() - returns a shallow copy of a portion of an array into a new array
//  let newArr = arr.slice(1, 4);
//  console.log(newArr); // Output: ['World', true, 4.89]

// // splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements
//   arr.splice(3,1, 'Replaced Element');
//   console.log(arr); // Output: ['First Element', 'World', 'Replaced Element', 4.89, 5, undefined, null]


// let sumofArray = (...arr) => {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
        
//         // sum of array 
        
//         sum = sum + arr[i];
        
//         // console.log(arr[i]);
//     }  
//     return sum;
// }
// let arr = [1,2,3,4,5];
// console.log(sumofArray(...arr)); // Output: 1


// map ()

// function sumofArray(...item) {
//     let sum = 0;

//     item.map((value) => {
//         sum = sum + value;
//     })
//     return sum;
// }

// let array = [1, 2, 3, 4, 5];
// console.log(sumofArray(...array)); // Output: 15


//forEach()

// let displayDomain = (...value) => {
//     let result = [];
//     value.forEach((item) => {
//         result.push(item);
//         console.log(item.domain);
//         console.log(item.company);
//         console.log(item.location);
//     })
//     return result;
// }


// const domains = [
//     { 
//         domain: 'google.com',
//         company: 'Google',
//         location: 'Mountain View, California, United States'
//      },
//     { 
//         domain: 'facebook.com',
//         company: 'Facebook',
//         location: 'Menlo Park, California, United States'
//      },
//     { 
//         domain: 'twitter.com',
//         company: 'Twitter',
//         location: 'San Francisco, California, United States'
//      }
// ];

// console.log(displayDomain(...domains)); // Output: ['google.com', 'facebook.com', 'twitter.com']

// filter()

// let filterEvenNumbers = (...numbers) => {
//     let evenNumbers = numbers.filter((num) => num % 2 === 0);
//     return evenNumbers;
// };

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filterEvenNumbers(...numbers)); // Output: [2, 4, 6, 8, 10]


// let filterValue = (...values) => {
//     let filteredValues = values.filter((value) => typeof value === 'string' && value === 'React');
//     return filteredValues;
// };

// let array1 = ['React', 'java', 56, 62.87, 'Hello', 3, 8, 10, true, false, undefined, null];
// console.log(filterValue(...array1)); // Output: ['React']


// reduce()

// let sumOfArray = (...numbers) => {
//     let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     return sum;
// };

// let array2 = [1, 2, 3, 4, 5,6,7,8,9,10];
// console.log(sumOfArray(...array2)); // Output: 55


// find()

// let findEvenNumber = (...values) => {
//     let evenNumber = values.find((item) => item === 'Javascript');
//     return evenNumber;
// };

// let array3 = [1, 3, 'Javascript', 7, 'd', 9];
// console.log(findEvenNumber(...array3)); // Output: 'Javascript'


// sort()

// let sortNumbers = (...numbers) => {
//     // let sortedNumbers = numbers.sort((a, b) => b - a);
//     let sortedArray = numbers.sort();
//     return sortedArray;
// };

// // let array4 = [5, 2, 9, 1, 5, 6];
// let array4 = ['h', 'e', 'l', 'l', 'o'];
// console.log(sortNumbers(...array4)); // Output: [1, 2, 5, 5, 6, 9]
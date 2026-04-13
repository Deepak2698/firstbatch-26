
// // strings in Javascript

// // const str1 = "We are learning JavaScript";
// // const str2 = 'JavaScript is fun';
// // const str3 = `Template literals are useful for embedding expressions: ${str1}`;

// // console.log(str1);
// // console.log(str2);
// // console.log(str3);

// // let name = "Alice";
// // let age = 30;

// console.log("My name is " + name + " and I am " + age + " years old.");

// // Using template literals
// console.log(`My name is ${name} and I am ${age} years old.`); 
// // ${} is known as string interpolation, it allows us to embed expressions inside a string.

// String methods

/* 
    we have many string methods in JavaScript that allow us to manipulate and work with strings.
    
    Some common string methods include:

1. `length`: Returns the length of the string.
2. `toUpperCase()`: Converts the string to uppercase letters.
3. `toLowerCase()`: Converts the string to lowercase letters.
4. `indexOf(substring)`: Returns the index of the first occurrence of the specified substring, or -1 if not found.
5. `slice(start, end)`: Extracts a section of the string and returns it as a new string.
6. `replace(searchValue, newValue)`: Replaces occurrences of a specified value with another value in the string.
7. `split(separator)`: Splits the string into an array of substrings based on a specified separator.
8. `trim()`: Removes whitespace from both ends of the string.
9. `includes(substring)`: Determines whether the string contains the specified substring, returning true or false.
10. `startsWith(substring)`: Determines whether the string starts with the specified substring, returning true or false.
11. `endsWith(substring)`: Determines whether the string ends with the specified substring, returning true or false.
12. `substring`
13. `charAt(index)`: Returns the character at the specified index in the string.
14. `concat(string1, string2, ...)`: Combines two or more strings into one string.
15. `repeat(count)`: Returns a new string that repeats the original string a specified number of times.
16. 

*/

// const str = "We_are_learning_JavaScript";

// console.log(str.length); // 28
// console.log(str.toUpperCase()); //WE_ARE_LEARNING_JAVASCRIPT 
// console.log(str.toLowerCase()); // we_are_learning_javascript
// console.log(str.indexOf("learning")); // 7
// console.log(str.slice(7, 15)); // learning
// console.log(str.replace("JavaScript", "JS")); // We_are_learning_JS
// console.log(str.split("_")); // [ 'We', 'are', 'learning', 'JavaScript' ]
// console.log(str.trim()); // We_are_learning_JavaScript
// console.log(str.includes("learning")); // true
// console.log(str.startsWith("We")); // true
// console.log(str.endsWith("Script")); // true
// console.log(str.charAt(16)); // J
// console.log(str.concat(" is fun!")); // We_are_learning_JavaScript is fun!
// console.log(str.repeat(2)); // We_are_learning_JavaScriptWe_are_learning_JavaScript
// console.log(str.substring(7, 15)); // learning
// console.log(str.substr(7, 5)); // learning

// ----------------------------------------------------------// 




const str = "We_are_learning_JavaScript";

// console.log(str.slice(-7, -15)); // learning
// console.log(str.substring(7, 15)); // learning



//substr(start, length) method extracts a substring from a string, starting at the specified index and then counting the no of characters
//mentioned

console.log(str.substr(5, 5)); 

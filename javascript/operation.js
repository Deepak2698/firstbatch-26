
// Artimetic operations in JavaScript

// var a = 5;
// var b = 10;
// var c = a + b;

// console.log(`The sum of a and b is: ${c}`);

// var d = a * b;

// console.log(`The product of a and b is: ${d}`);

// var e = b - a;

// console.log(`The difference between b and a is: ${e}`);

// var f = b / a;

// console.log(`The quotient of b divided by a is: ${f}`);

// var g = b % a;

// console.log(`The remainder of b divided by a is: ${g}`);


/* ---------------------------------------------------------------- */

// Assignment operations in JavaScript

// var x = 10;
// console.log(`Initial value of x: ${x}`);

// x += 5; // Equivalent to x = x + 5
// console.log(`After addition assignment (x += 5): ${x}`);

// x -= 3; // Equivalent to x = x - 3
// console.log(`After subtraction assignment (x -= 3): ${x}`);

// x *= 2; // Equivalent to x = x * 2
// console.log(`After multiplication assignment (x *= 2): ${x}`);

// x /= 4; // Equivalent to x = x / 4
// console.log(`After division assignment (x /= 4): ${x}`);

// x %= 3; // Equivalent to x = x % 3
// console.log(`After modulus assignment (x %= 3): ${x}`);


/* ---------------------------------------------------------------- */

// Increment and Decrement operations in JavaScript

// var y = 5;
// console.log(`Initial value of y: ${y}`);

// y++; // Post-increment: y is incremented after its current value is used
// console.log(`After post-increment (y++): ${y}`);

// ++y; // Pre-increment: y is incremented before its current value is used
// console.log(`After pre-increment (++y): ${y}`);

// y--; // Post-decrement: y is decremented after its current value is used
// console.log(`After post-decrement (y--): ${y}`);

// --y; // Pre-decrement: y is decremented before its current value is used
// console.log(`After pre-decrement (--y): ${y}`);

// var num = 10;

// console.log(num++); //10
// console.log(num); //11
// console.log(++num); //12

// var count = 5;

// console.log(count--); //5
// console.log(count); //4
// console.log(--count); //3


/* ---------------------------------------------------------------- */

// Comparison operations in JavaScript

// var a = 10;
// var b = 20;

// console.log(`Is a equal to b? ${a == b}`); // false
// console.log(`Is a not equal to b? ${a != b}`); // true
// console.log(`Is a greater than b? ${a > b}`); // false
// console.log(`Is a less than b? ${a < b}`); // true
// console.log(`Is a greater than or equal to b? ${a >= b}`); // false
// console.log(`Is a less than or equal to b? ${a <= b}`); // true

// ------------------------------------ //

// var x = 5;
// var y = '5';

// console.log(`Is x equal to y (==)? ${x == y}`); // It compares values and returns true because they are equal in value not the data type
// console.log(`Is x equal to y (===)? ${x === y}`); // It compares values and data types and returns false because they are not the same data type
// console.log(`Is x not equal to y (!=)? ${x != y}`); // It compares values and returns false because they are equal in value
// console.log(`Is x not equal to y (!==)? ${x !== y}`); // It compares values and data types and returns true because they are not the same data type


/* ---------------------------------------------------------------- */

// Logical operations in JavaScript

var a = true;
var b = false;

console.log(`a AND b (a && b): ${a && b}`); // false // It returns true only if both a and b are true(1)
console.log(`a OR b (a || b): ${a || b}`); // true // It returns true if at least one of a or b is true(1)
console.log(`NOT a (!a): ${!a}`); // false
console.log(`NOT b (!b): ${!b}`); // true
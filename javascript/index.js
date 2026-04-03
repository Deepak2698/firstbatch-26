

// difference between var let const

/* 
  var: 
  1.we can reassign the values /variables that has been declared with var {mutable}
  2.we dont get any error if we try accessing the variable before declaring it because of hoisting
  3.it is function scoped
*/ 

// console.log(num);

// var num=10;
// console.log(num);
// console.log(typeof num);

// num=20;
// console.log(num);
// console.log(typeof num);




// ------------------------------------------------------------------------------------------------------------------------



/*
// let:
1.we can reassign the values /variables that has been declared with let {mutable}
2.we get an error if we try accessing the variable before declaring it because of temporal dead zone
3.it is block scoped
*/


// console.log(num);   //Cannot access 'num' before initialization
// let num=10;
// console.log(num);
// console.log(typeof num);

// num=20;
// console.log(num);
// console.log(typeof num);


// ------------------------------------------------------------------------------------------------------------------------



/*
const:
1.we cannot reassign the values /variables that has been declared with const {immutable}
2.we get an error if we try accessing the variable before declaring it because of temporal dead zone
3.it is block scoped
*/

console.log(num);   // Cannot access 'num' before initialization
const num=10;
console.log(num);
console.log(typeof num);

num=20; 
console.log(num); //TypeError: Assignment to constant variable.
console.log(typeof num);
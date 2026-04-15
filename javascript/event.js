/**
 *  What is an event?
 * 
 * An event is an action that occurs in the system you are programming, which the system tells you about so your code can react to it. 
 * 
 *  Examples of events include:
 * 
 * * - A user clicking a button
 * * - A web page finishing loading
 * * - A form being submitted
 * * - A video being played
 * * - A file being uploaded
 * 
 *  Events are a fundamental part of programming, especially in interactive applications like web development.
 *  They allow developers to create dynamic and responsive user interfaces by responding to user actions and other occurrences in the system.
 */


// In JavaScript, you can listen for events using event listeners and handle them with event handlers. 

// Here's a simple example of how to use an event listener to respond to a button click:

// HTML: <button id="myButton">Click me</button>

// JavaScript:
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    alert('Button was clicked!');
});

// In this example, we select the button element by its ID and add an event listener for the 'click' event. 
// When the button is clicked, the anonymous function is executed, which shows an alert message.

// You can also use named functions as event handlers:

function handleClick() {
    alert('Button was clicked!');
}

button.addEventListener('click', handleClick);

// This achieves the same result, but it allows you to reuse the handleClick function for multiple buttons or events if needed.

// Additionally, you can remove event listeners using the removeEventListener method:

button.removeEventListener('click', handleClick);

// This will stop the handleClick function from being called when the button is clicked.        


//------------------------------------------------------------------------------------------------------------------

// function handleEvent(){
//   const element = document.getElementById('name');
//   const name = 'Sakshi';
//   console.log('clicked');
//   element.innerHTML = name;
// }

// const btn = document.getElementById('myButton');

// function handleClick(){
//     alert('Button was clicked!');
// }


// btn.addEventListener('click', handleClick);
// // button.removeEventListener('click', handleClick);


// <!-- <button onClick="handleEvent()">
//   click me
// </button>

// <h1 id="name">

// </h1> -->

// <button id="myButton">
//   Click me
// </button>


//---------------------------------------------------------------------------------------------------

{/* <input type="text" id="input-value" placeholder="Enter Value" value="react">

<h1 id="name">

</h1>

const element = document.getElementById('input-value');
const element1 = document.getElementById('name');

function handleInput (event) {
  console.log(event.target.value);
  element1.innerHTML = event.target.value
}

element.addEventListener('input', handleInput) */}
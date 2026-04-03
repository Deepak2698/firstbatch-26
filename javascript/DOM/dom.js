
let num = 10; // global scope / Outer scope

// {} is known as code block

function printMessage(value){
    alert("This is a message from printMessage function");
    console.log(value); // 10 // Inner scope / Lexical scope
}


function externalMessage(){
    alert("This is an external message");
    var num1 = 20;
    let num5 = 60;
    console.log(num); // 10 // Inner scope / Lexical scope
    console.log(num1); // 20 // function scope
    console.log(num5); // 60 // block scope

    {
        let num2 = 30;
        console.log(num2); // 30 // block scope

        const num3 = 40;
        console.log(num3); // 40 // block scope

        var num4 = 50;
        console.log(num4); // 50 // function scope (var is not block scoped)
    }

    // console.log(num2); // ReferenceError: num2 is not defined
    // console.log(num3); // ReferenceError: num3 is not defined
    console.log(num4); // 50 // var is function scoped, so it is accessible here

console.log(num); // 10 // Inner scope / Lexical scope
    console.log(num1); // 20 // function scope
    console.log(num5); // 60 // block scope

    const message = "Students are learning JavaScript";
    // console.log(message);
    printMessage(message);

    let strength = 100;
    printMessage(strength);
}

 console.log(num); // 10 // global scope
 //console.log(num1); // ReferenceError: num1 is not defined // functional scope
// console.log(num2); // ReferenceError: num2 is not defined // block scope
// console.log(num3); // ReferenceError: num3 is not defined // block scope
// console.log(num4); // ReferenceError: num4 is not defined // function scope (var is not block scoped)
// console.log(num5); // ReferenceError: num5 is not defined // block scope
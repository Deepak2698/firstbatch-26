
// let num = 10; // global scope / Outer scope

// // {} is known as code block

// function printMessage(value){
//     alert("This is a message from printMessage function");
//     console.log(value); // 10 // Inner scope / Lexical scope
// }


// function externalMessage(){
//     alert("This is an external message");
//     var num1 = 20;
//     let num5 = 60;
//     console.log(num); // 10 // Inner scope / Lexical scope
//     console.log(num1); // 20 // function scope
//     console.log(num5); // 60 // block scope

//     {
//         let num2 = 30;
//         console.log(num2); // 30 // block scope

//         const num3 = 40;
//         console.log(num3); // 40 // block scope

//         var num4 = 50;
//         console.log(num4); // 50 // function scope (var is not block scoped)
//     }

//     // console.log(num2); // ReferenceError: num2 is not defined
//     // console.log(num3); // ReferenceError: num3 is not defined
//     console.log(num4); // 50 // var is function scoped, so it is accessible here

// console.log(num); // 10 // Inner scope / Lexical scope
//     console.log(num1); // 20 // function scope
//     console.log(num5); // 60 // block scope

//     const message = "Students are learning JavaScript";
//     // console.log(message);
//     printMessage(message);

//     let strength = 100;
//     printMessage(strength);
// }

//  console.log(num); // 10 // global scope
//  //console.log(num1); // ReferenceError: num1 is not defined // functional scope
// // console.log(num2); // ReferenceError: num2 is not defined // block scope
// // console.log(num3); // ReferenceError: num3 is not defined // block scope
// // console.log(num4); // ReferenceError: num4 is not defined // function scope (var is not block scoped)
// // console.log(num5); // ReferenceError: num5 is not defined // block scope


//-------------------DOM------------------//


function changeBackgroundColor(){
    document.body.style.backgroundColor = "lightblue";
}

function changeHeadingColor(){
    const heading = document.getElementById("heading");
    heading.style.color = "red";
    console.log(heading.style.color);
}

function changeText(){
    const heading = document.getElementById("heading");
    heading.textContent = "We are learning DOM Manipulation..!";
    console.log(heading.textContent);
}

function writeText(){
    const newParagraph = document.createElement("h1");
    newParagraph.innerHTML = "This is a new paragraph added to the DOM.";
    document.body.appendChild(newParagraph);
}

function changeContent(){
    const heading = document.getElementById("heading");
    let newContent = document.write("This is new content written using document.write()");
    heading.textContent = newContent;
    console.log(newContent);
}

function domainName(){
    const domain = window.prompt("Please enter your domain name:");
    const myText = document.getElementById("myText");
    myText.textContent = `Your domain name is: ${domain}`;
    console.log(domain);
}

function deleteDomain(){

    const confirmation = window.confirm("Are you sure you want to delete the domain name?");
    const myText = document.getElementById("myText");

    if(confirmation){
        const newMessage = document.createElement("p");
        console.log("Domain name deleted");
        myText.textContent = "Your domain name is deleted";
        document.body.appendChild(newMessage);
    }else{
        const newMessage = document.createElement("p");
        console.log("Domain name deletion cancelled");
        myText.textContent = "Domain name deletion cancelled";  
        document.body.appendChild(newMessage);
    
    }
    
}
function changeImage(){
    const image = document.getElementById("myImage");
    image.src = "https://decodecrafters.in/assets/html1.png";
    image.alt = "Placeholder Image";
}

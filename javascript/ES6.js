
// function firstSyntax(){
//     console.log("This is the first syntax of arrow function");
// }

// firstSyntax();

// const secondSyntax = function(){
//     console.log("This is the second syntax of arrow function");
// }

// secondSyntax();

// Arrow function syntax

// const arrowSyntax = (name,domain) => {
//     // console.log("This is the arrow function syntax");
//     console.log(`This is the arrow function syntax and my name is ${name} and I am a ${domain}`);
// }

// arrowSyntax("John", "Developer");



// ---------------------------- Destructuring ---------------------------- //


// let person = {
//     name: "Alice",
//     age: 25,
//     city: "New York",
//     gender: "Female"
// };

// console.log(person.name); // Output: Alice
// console.log(person.age);
// console.log(person.city);


// let data = [  
//                 {
//                     name: "John",
//                     age: 30,
//                     city: "New York",
//                     gender: "Male"
//                 },
//                 {
//                     name: "Jane",
//                     age: 28,
//                     city: "Los Angeles",
//                     gender: "Female"
//                 },
//                 { 
//                     name: "Alice",
//                     age: 25,
//                     city: "New York",
//                     gender: "Female"

//                 }
//             ];

//             console.log(data[0].name); // Output: John
//             console.log(data[0].age);
//             console.log(data[0].city);
//             console.log(data[0].gender);
//             console.log(data[1].name); // Output: Jane
//             console.log(data[1].age);
//             console.log(data[1].city);
//             console.log(data[1].gender);
//             console.log(data[2].name); // Output: Alice
//             console.log(data[2].age);
//             console.log(data[2].city);
//             console.log(data[2].gender);

// ------------------------------- Classes in JavaScript ---------------------------- //

class restaurant {

    // data members

    restaurantList = [
        {
            name: "Pizza Hut",
            location: "Pune",
            cuisine: "Italian",
            rating: 4.5
        },
        {
            name: "Domino's",
            location: "Mumbai",
            cuisine: "Italian",
            rating: 4.0
        },
        {
            name: "Burger King",
            location: "Delhi",
            cuisine: "American",
            rating: 4.2
        }
    ]


    // member functions
    
    displayRestaurantList(){
        console.log(this.restaurantList.forEach(restaurant => {
            console.log(`Name: ${restaurant.name}, Location: ${restaurant.location}, Cuisine: ${restaurant.cuisine}, Rating: ${restaurant.rating}`);
        }));
    }
}

let restaurantObj = new restaurant();

restaurantObj.displayRestaurantList();
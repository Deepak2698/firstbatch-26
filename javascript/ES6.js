
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

// class restaurant {

//     // data members

//     restaurantList = [
//         {
//             name: "Pizza Hut",
//             location: "Pune",
//             cuisine: "Italian",
//             rating: 4.5
//         },
//         {
//             name: "Domino's",
//             location: "Mumbai",
//             cuisine: "Italian",
//             rating: 4.0
//         },
//         {
//             name: "Burger King",
//             location: "Delhi",
//             cuisine: "American",
//             rating: 4.2
//         }
//     ]


//     // member functions
    
//     displayRestaurantList(){
//         console.log(this.restaurantList.forEach(restaurant => {
//             console.log(`Name: ${restaurant.name}, Location: ${restaurant.location}, Cuisine: ${restaurant.cuisine}, Rating: ${restaurant.rating}`);
//         }));
//     }
// }

// let restaurantObj = new restaurant();

// restaurantObj.displayRestaurantList();


// classes without parameterized constructor


    // class domain {

    // // data members

    // name = 'Jyoti';
    // field = 'Web Developer';
    // age = 23;
    // stack = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

    //  domainStack = {
    //     'domain1': 'Frontend Development',
    //     'domain2': 'Backend Development',
    //     'domain3': 'Full Stack Development',
    //     'domain4': 'Data Science',
    //     'domain5': 'Machine Learning'
    // }

    // // member functions

    //     displayDomainStack(){
    //         console.log(this.stack[0]);
    //         console.log(this.stack[1]);
    //         console.log(this.stack[2]);
    //         console.log(this.stack[3]);
    //         console.log(this.stack[4]);
    //     }

    //     displayDomains(){
    //         console.log(this.domainStack.domain1);
    //         console.log(this.domainStack.domain2);
    //         console.log(this.domainStack.domain3);
    //         console.log(this.domainStack.domain4);
    //         console.log(this.domainStack.domain5);
    //     }

    //     displayStudentDetails(){
    //         console.log(`My name is ${this.name} and I am a ${this.field}
    //          and I am ${this.age} years old and my stack is 
    //          ${this.displayDomainStack()} and my domain stack is ${this.displayDomains()}`);
    //     }

    // }

    // let domainObj = new domain();

    // // using obj we can have access to data members and member functions of the class

    // // console.log(`My name is ${domainObj.name} and I am a ${domainObj.field}
    // //      and I am ${domainObj.age} years old and my stack is ${domainObj.stack} 
    // //      and my domain stack is ${JSON.stringify(domainObj.domainStack)}`);

    // // console.log(`My name is ${domainObj.name} and I am a ${domainObj.domainStack.domain1} `);
    // // console.log(typeof domainObj.name);
    // // console.log(typeof domainObj.field);
    // // console.log(typeof domainObj.age);
    // // console.log(typeof domainObj.stack);
    // // console.log(typeof domainObj.domainStack);

    // // domainObj.displayDomainStack();
    // // domainObj.displayDomains();
    // domainObj.displayStudentDetails();


// classes with parameterized constructor

class domain {

    // data members

    name;
    field;
    age;
    stack = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

     domainStack = {
        'domain1': 'Frontend Development',
        'domain2': 'Backend Development',
        'domain3': 'Full Stack Development',
        'domain4': 'Data Science',
        'domain5': 'Machine Learning'
    }

    // member functions

    constructor(name, field, age){
        this.name = name;
        this.field = field;
        this.age = age;
    }

    
        displayDomainStack(){
            console.log(this.stack[0]);
            console.log(this.stack[1]);
            console.log(this.stack[2]);
            console.log(this.stack[3]);
            console.log(this.stack[4]);
        }

        displayDomains(){
            console.log(this.domainStack.domain1);
            console.log(this.domainStack.domain2);
            console.log(this.domainStack.domain3);
            console.log(this.domainStack.domain4);
            console.log(this.domainStack.domain5);
        }

        displayStudentDetails(){
            console.log(`My name is ${this.name} and I am a ${this.field}
             and I am ${this.age} years old and my stack is 
             ${this.displayDomainStack()} and my domain stack is ${this.displayDomains()}`);
        }

    }

    let domainObj1 = new domain('decode-crafters', 'Web Development', 28);

    // using obj we can have access to data members and member functions of the class

    console.log(`My name is ${domainObj1.name} and I am a ${domainObj1.field}
         and I am ${domainObj1.age} years old `);    
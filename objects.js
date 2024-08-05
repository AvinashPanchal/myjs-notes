// Objects in Javascript: Object() can be called with or without new. Both create a new object.
/*
Syntax
new Object(value)
Object(value)
let object_name = {
    key_name : value,
    ...
}
*/

// JavaScript code demonstrating a simple object
let school = {
    name: 'Vivekananda School',
    location: 'Delhi',
    established: '1971',
    displayInfo: function () {
        console.log(`${school.name} was established 
              in ${school.established} at ${school.location}`);
    }
}
school.displayInfo();   

// Object Properties: Properties are defined as key-value pairs, where the key is a string or symbol and the value can be any data type, including numbers, strings, booleans, functions, arrays, or other objects.

let school1 = {
    name: 'Vivekananda School',
    location: 'Delhi',
    established: '1971',
    20: 1000,
    displayInfo: function () {
        console.log(`The value of the key 20 is ${school1['20']}`);
    }
}
school1.displayInfo();  // The value of the key 20 is 1000

// Inherited Properties: 
//Inherited properties are those that come from the object’s prototype rather than being defined directly on the object. To check if a property is an object’s own property, use the hasOwnProperty method.

let school2 = {
    "name": "Vivekananda School"
};
console.log(school2.hasOwnProperty("name")); //true
console.log(school2.hasOwnProperty("toString")); //false

//Property Attributes: Data properties in JavaScript have four attributes:
/*
value: The property’s value.
writable: When true, the property’s value can be changed
enumerable: When true, the property can be iterated over by “for-in” enumeration. Otherwise, the property is said to be non-enumerable.
configurable: If false, attempts to delete the property, change the property to be an access-or property, or change its attributes (other than [[Value]], or changing [[Writable]] to false) will fail.
*/
let person = {
    name: "John"
};
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: false
});

// Accessing Object Members: Object members (properties or methods) can be accessed using dot notation or bracket notation.

// 1. dot notation: Below is the example of accessing object members.


let school3 = { 
    name : "Vivekanada", 
    location : "Delhi", 
    established : 1971,
    20 : 1000, 
    displayinfo : function() { 
        console.log(`${school3.name} was established 
        in ${school3.established} at ${school3.location}`); 
    } 

} 
console.log(school3.name); 

console.log(school3.established); 

// 2. Bracket Notation: Below is the example of Bracket Notation.

let school4 = {
    name: "Vivekanada School",
    location: "Delhi",
    established: 1995,
    20: 1000,
    displayinfo: function () {
        document.write(`${school4.name} was established 
        in ${school4.established} at ${school4.location}`);
    }
}
// Output : Vivekanada School 
console.log(school4['name']);

// Output: 1000 
console.log(school4['20']); 

// object iteration: 
let person2 = {
    gender: "male"
}

for (let key in person2) {
    // Output : gender
    console.log(key);
}  

let person1 = Object.create(person2);
person1.name = "Adam";
person1.age = 45;
person1.nationality = "Australian";

for (let key in person1) {
    // Output : name, age, nationality 
    // and gender
    console.log(key);
}  


// Deleting Object Properties: To delete a property of an object, use the delete operator. Note that you cannot delete inherited properties or non-configurable properties.

let obj1 = { 
    propfirst : "Name"
} 

// Output : Name 
console.log(obj1.propfirst); 
delete obj1.propfirst 

// Output : undefined 
console.log(obj1.propfirst);   

//we can not delete inherited properties or non-configurable properties
let obj3 = { 
    propfirst : "Name"
} 
// Output : Name 
console.log(obj3.propfirst) 
let obj2 = Object.create(obj3); 

// Output : Name 
console.log(obj2.propfirst); 
    
// Output : true. 
console.log(delete obj2.propfirst); 

    // Surprisingly Note that this will return true 
    // regardless of whether the deletion was successful 

    // Output : Name     
    console.log(obj2.propfirst); 

    // The object can be created in two ways in JavaScript:
    // 1. Using an Object Literal.

let person = {
    first_name: 'Mukul',
    last_name: 'Latiyan',
 
    //method
    getFunction: function () {
        return (`The name of the person is 
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number: {
        mobile: '12345',
        landline: '6789'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline); 

// 2. Using an Object Constructor.

function person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}
// Creating new instances of person object
let person1 = new person('Mukul', 'Latiyan');
let person2 = new person('Rahul', 'Avasthi');
 
console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);




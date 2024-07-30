/*
JavaScript Data Types:
Primitive Data Types: They can hold a single simple value. String, Number, BigInt, Boolean, undefined, null, and Symbol are primitive data types.
Non-Primitive Data Types: They can hold multiple values. Objects are non-primitive data types. Key-value pairs of collection of data.
*/


// JavaScript String: A string represents textual data.

// Single quotes: 'Hello'
console.log('Hello'); // Hello

//Double quotes: "Hello"
console.log("Hello"); // Hello

//Backticks: `Hello`
console.log(`Hello`); // Hello

// JavaScript Number: the number type represents numeric values.
// Integers - Numeric values without any decimal parts. Example: 3, -74, etc.
let x = -3;
console.log(x); // 3

// Floating-Point - Numeric values with decimal parts. Example: 3.15, -1.3, etc.
let y = 5.65;
console.log(y); // 5.65

// JavaScript BigInt: BigInt is a type of number that can represent very large or very small integers beyond the range of the regular number data type.
// The regular number data type can handle values less than (2^53 - 1) and greater than -(2^53 - 1).
// A BigInt number is created by appending n to the end of an integer
let value1 = 900719925124740998n;
console.log(value1); // 900719925124740998n

// JavaScript Boolean: A Boolean data can only have one of two values: true or false.

let dataChecked = true;
console.log(dataChecked);  // true

let valueCounted = false;
console.log(valueCounted);  // false

// JavaScript undefined: In JavaScript, undefined represents the not assign any value.
let name;
console.log(name);  // undefined

// It is also possible to explicitly assign undefined as a variable value. For example,

let anothername = undefined;
console.log(anothername);  // undefined


// JavaScript null: In JavaScript, null represents "no value" or "nothing."
let number = null;
console.log(number);  // null


// JavaScript Symbol: A Symbol is a unique and primitive value. This data type was introduced in ES6.
// two symbols with the same description

let value2 = Symbol("Avinash");
let value3 = Symbol("Avinash");
console.log(value1 === value2);  // false


// JavaScript Object:An Object holds data in the form of key-value pairs.

let student = {
    firstName: "John",
    lastName: null,
    class: 10
};
console.log(student);



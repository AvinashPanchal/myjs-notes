// JavaScript Variables: it is the name of the storage location where data is stored.
// Local variables: Declare a variable inside of a block or function.
// Global variables: Declare a variable outside function or with a window object.

let Name = "Apple"; // global variable

function MyFunction() {
let num = 45; // local variable
console.log(Name); // Apple
console.log(num); //45 
fruit = 'Pine apple'; // Variables declared without the var, let, or const keywords (prior to ES6) inside a function automatically become global variables. 
}
MyFunction();

console.log(fruit); //Pine apple

/*-----------------------------------------------------------------------------------*/

// Let Variable:
// 1. Block Scope - The variables which are declared inside the { } block are known as block-scoped variables.

{
    let num = 10;
    // calling the function inside block
    console.log(num); // 10
}
// Calling a function outside
// block throws an Error
console.log(num); // ReferenceError: num is not defined



// 2. Global Scope - A global scope variable is a variable declared in the main body of the source code.

let num1 = 10;
console.log(num1); // 10
function fun() {
    console.log(num1); // 10
}
fun(); // Calling the function


// 3. Function Scope - A function scope variable is a variable declared inside a function and cannot be accessed outside the function.

function fun() {
    let num2 = 10;
    console.log(num2); // 10
}

fun(); //  Calling the function

console.log(num2); // "ReferenceError: num is not defined


// Redeclaring Variables in different blocks
let x = 77;
{
    let x = 23;
    console.log(x); //23
}
console.log(x); //77


// Redeclaring Variables in the same blocks

let y = 77;
{
    let y = 23; // legal
    console.log(y); // 23
}
let y = 67; // illegal
console.log(y); // SyntaxError: Identifier 'x' has already been declared


// Does not support Hoisting -- The behavior of moving the declarations on top of the script is known as hoisting.

x1 = 12;
console.log(x1); // ReferenceError: Cannot access 'x' before initialization 
let x1;


/*----------------------------------------------------------------------------------------*/ 

// Const Variable -- variables that cannot be changed once they’re assigned a value.
const x2 = 12;
x2 = 13;
x2 += 1;
console.log(x2); //TypeError: Assignment to constant variable.

// 1. Block Scope. 

const x3 = 22;
{
    const x3 = 90;
    console.log(x3); // 90

    {
        const x3 = 77;
        console.log(x3); // 77
    }
    {
        const x3 = 45;
        console.log(x3); // 45
    }
}
console.log(x3); // 22

// Variables must be Assigned

const x4;
x4 = 12;
console.log(x4); // SyntaxError: Missing initializer in const declaration


// Cannot be Hoisted
x5 = 3;
console.log(x5); // SyntaxError: Missing initializer in const declaration
const x5;

// Const in Arrays - array values can be modified only reference to the array cannot be changed. 

const arr1 = ["pankaj", "sumit", "chandan", "ajay"];
console.log(arr1.toString()); // pankaj,sumit,chandan,ajay

arr1[2] = "Narayan"; // possible
console.log(arr1.toString()); // pankaj,sumit,Narayan,ajay


// Const in Objects -- object properties can be modified only reference to the object cannot be changed. 
const person = {
    first_name: "Pankaj",
    last_name: "Singh",
    Age: 20,
    About: "Web Developer and Competitive Programmer"
};

console.log(person);

// It is possible
person.first_name = "Aryan";
person.last_name = "Yadav";
person.Age = 22;
person.About = "Commerce undergraduate";

console.log(person);

// it is not possible
// const person={
// "first_name":"Aryan",
// "last_name":"Yadav",
// "Age":22,
// "About":"Commerce undergraduate"
// }

/*----------------------------------------------------------------------------------------*/ 
// Var variable
// 1. Block Scope - The variables which are declared inside the { } block are known as block-scoped variables.

{
    var num = 10;
    // calling the function inside block
    console.log(num); // 10
}
// Calling a function outside
console.log(num); // 10



// 2. Global Scope - A global scope variable is a variable declared in the main body of the source code.

var num1 = 10;
console.log(num1); // 10
function fun() {
    console.log(num1); // 10
}
fun(); // Calling the function


// 3. Function Scope - A function scope variable is a variable declared inside a function and cannot be accessed outside the function.

function fun() {
    var num2 = 10;
    console.log(num2); // 10
}

fun(); //  Calling the function

console.log(num2); // "ReferenceError: num2 is not defined


// Support Hoisted
console.log(test); //undefind
var test = 12;

// redeclare a variable in the same global block
var test = 12;
var test = 100;
console.log(test); // 100
 

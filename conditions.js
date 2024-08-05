// JavaScript’s conditional statements

// 1. if-statement: 
/*
Syntax:
if(condition) 
{
   // Statements to execute if
   // condition is true
}
*/
let age = 19;
if (age > 18)
console.log("Congratulations, You are eligible to drive");

// 2. if-else statement: 
/*
Syntax:
if (condition)
{
    // Executes this block if
    // condition is true
}
else
{
    // Executes this block if
    // condition is false
}
*/

let i = 10;

if (i < 15)
    console.log("i is less than 15");
else
    console.log("I am Not in if");


// 3. nested-if statement: 
/*
Syntax:
if (condition1) 
{
   // Executes when condition1 is true
   if (condition2) 
   {
      // Executes when condition2 is true
   }
}
*/

// JavaScript program to illustrate nested-if statement
let x = 10;

if (i == 10) {  // First if statement
    if (x < 15) {
        console.log("i is smaller than 15");
        // Nested - if statement
        // Will only be executed if statement above
        // it is true
        if (x < 12)
            console.log("i is smaller than 12 too");
        else
            console.log("i is greater than 15");
    }
}

// 4. if-else-if ladder statement:
/*
Syntax:
if (condition)
    statement;
else if (condition)
    statement;
.
.
else
    statement;
*/ 

// JavaScript program to illustrate nested-if statement
let x1 = 20;

if (x1 == 10)
    console.log("x1 is 10");
else if (x1 == 15)
    console.log("x1 is 15");
else if (x1 == 20)
    console.log("x1 is 20");
else
    console.log("x1 is not present");


// 5. switch Statement: switch statement evaluates an expression and executes a block of code based on matching cases.

/*
Syntax
switch (expression) {
    case value1:
        // code block 1;
        break;
    case value2:
         // code block 2;
        break;
   ...
    default:
       // default code block;
}
*/

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Wednesday


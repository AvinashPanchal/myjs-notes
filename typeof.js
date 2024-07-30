
// JavaScript Type Conversion: type conversion is the process of converting data of one type to another. For example, converting string data to number.

// Implicit Conversion - Automatic type conversion. 

// convert number to string
let result1 = "3" + 2; 
console.log(result1, "-", typeof(result1)); //32 - string

let result2 = "3" + true; 
console.log(result2, "-", typeof(result2)); //3true - string

let result3 = "3" + null; 
console.log(result3, "-", typeof(result3)); //3null - string

// Explicit Conversion - Manual type conversion. using built-in functions.
// convert string to number
let result4 = Number("5");
console.log(result4, "-", typeof(result4)); // 5 - number

// convert boolean to string
let result5 = String(true);
console.log(result5, "-", typeof(result5)); //true - string

// convert number to boolean
let result6 = Boolean(0);
console.log(result6, "-", typeof(result6)); //false - boolean

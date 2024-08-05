// JavaScript Loops: JavaScript loops are essential for efficiently handling repetitive tasks. 

// 1. Four Loop: 

let x;
// for loop begins when x = 2
// and runs till x <= 4
for (x = 2; x <= 4; x++) {
    console.log("Value of x: " + x);
}


// 2. While Loops:

let x1 = 3;
while (x1<9) {
    console.log("value of x1: ", x1);
    x1 = x1+1;
}

// 3. Do-While Loop

let x2=2;
do {
    console.log('Value of x2: ', x2);
    x2++;
} while (x2<=6);

// 4. for-in Loop: for-in loop is used to iterate over the properties of an object.

let myObj = { x: 1, y: 2, z: 3 };
for (let key in myObj) {
    console.log(key, myObj[key]);
}

// 5. for-of Loop: for-of loop is used to iterate the iterable objects for example – array, object, set and map.

let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}

// 6. JavaScript Labeled Statement: JS label keyword does not include a goto keyword. Users can use the continue keyword with the label statement.
/*
Syntax
Label:
    statement (loop or block of code)
*/

let sum = 0, a = 1; 

// Label for outer loop 
outerloop: while (true) { 
    a = 1; 

    // Label for inner loop 
    innerloop: while (a < 3) { 
        sum += a; 
        if (sum > 12) { 

            // Break outer loop from inner loop 
            break outerloop; 
        } 
        console.log("sum = " + sum); 
        a++; 
    } 
}

// 7. Break Statement: break statement is used to terminate the execution of the loop or switch statement when the condition is true.

for (let i = 1; i < 6; i++) {
    if (i == 4) 
        break;
        
    console.log(i);
}

// 8. Continue Statement: continue statement is used to break the iteration of the loop and follow with the next iteration. 

for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) 
        continue;
        
    console.log(i);
}


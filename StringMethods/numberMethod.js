let a = 10;
let b = 3;

console.log(a + b);  // Outputs: 13
console.log(a - b);  // Outputs: 7
console.log(a * b);  // Outputs: 30
console.log(a / b);  // Outputs: 3.3333...
console.log(a % b);  // Outputs: 1 (remainder of 10 / 3)

console.log(Math.floor(4.7));  // Outputs: 4
console.log(Math.floor(4.2));  // Outputs: 4

console.log(Math.ceil(4.7));  // Outputs: 5
console.log(Math.ceil(4.2));  // Outputs: 5

console.log(Math.round(4.5));  // Outputs: 5
console.log(Math.round(4.2));  // Outputs: 4

console.log(Math.random());  // Outputs: A random decimal between 0 and 1

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);


const intValue = parseInt("42");
console.log(intValue);  // Outputs: 42

console.log(parseInt("3.14"));  // Outputs: 3 (decimal part is ignored)

const floatValue = parseFloat("3.14");
console.log(floatValue);  // Outputs: 3.14



//Practice Problems 

// Exercise 1: Random Number Generator
// Write a function that returns a random integer between 1 and 100.

const randomNumber1to100 = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber1to100);


// Exercise 2: Rounding Challenge
// Use Math.floor() and Math.ceil() to round the number 7.5 both ways.
// Print the results to the console.

console.log(Math.floor(7.5));
console.log(Math.ceil(7.5));

// Exercise 3: Parsing Numbers
// Create a string with the value "123.45".
// Use parseInt() and parseFloat() to print both the integer and float versions of the string.

console.log(parseInt(123.45));
console.log(parseFloat(123.45));

console.log(parseInt("123abc"));
console.log(parseFloat("45.67xyz"));

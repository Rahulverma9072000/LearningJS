//Javascript Statements : Single Instruction in JS , Every line of code you write and ends with a semicolon (;) is a Single JS Statement .

//JS is Case Sensitive
let age = 30;
let Age = 25;
//These are 2 different variables
console.log(age);
console.log(Age);

//JS Comment Single Line start with //
/* 
This is actually a Multi- line 
Comment in Javascript .
*/

//Javascript does not care about extra spaces or new line , but using consistent indentation makes your code easier to read .
let x = 10;
let y = 20;
if (x < y) {
    console.log("x is less than y");
} //See this will also work but not looking good

//Variables in Javascript : Variables are like containers that store data for you to use later . let , var and const .
let score = 100;
score = 150; //update also
console.log(score);

const pi = 3.14159; //we can't update the const variable
console.log(pi);

//old school var : It behaves differently that can lead to confusion so don't use it .
//Best to Use let and const in Modern Javascript

//Rules for Naming Variables
//Variable Names can start with $ or _ , cannot start with a number
//Can Contain letters , numbers , $ , _ , but no spaces
//Preferrably use camelCase instead of space

//DataTypes in Javascript : Primitive vs Non-Primitive

//Primitive data types are the most basic forms of data in Javascript .
//Store simple value and immutable (Cannot Changed After Creation ) .
//Like If you update string like str[0] = 'h' than whole new string is made and reallocated
//7 types of Primitive DataTypes : Strings , Numbers , Booleans , undefined , Null , Symbol , BigInt (For Large Integers)

//Strings
let name = "Alice"; // Double quotes
let greeting = "Hello!"; // Single quotes
let message = `Hi, ${name}! Welcome to JavaScript!`; // Template literal
console.log(message); // Outputs: Hi, Alice! Welcome to JavaScript!

//Number can be int and float both
let userAge = 30; // Integer
let price = 19.99; // Decimal
console.log(userAge + price); // Outputs: 49.99

//Booleans
let isLoggedIn = true;
let hasDiscount = false;
console.log(isLoggedIn); // Outputs: true

//Undefined : is the default value assigned to a variable that has been declared and never assigned a value .
let myVar;
console.log(myVar); // Outputs: undefined

//Null : is an intentional abscence of an object value .
// Unlike undefined, which means “not yet assigned,” null is used to explicitly represent “no value.”
// undefined: Automatically assigned by JavaScript when a variable is declared but not initialized.
// null: Explicitly assigned by the programmer to indicate the absence of any value or object.
let emptyBox = null;
console.log(emptyBox); // Outputs: null

// Symbols: Unique and immutable primitive values that can be used as object property keys.
let uniqueKey = Symbol("unique");
console.log(uniqueKey); // Outputs: Symbol(uniq

// BigInt: Used to represent integers larger than the maximum safe integer limit for Number type.
let largeNumber = BigInt(9007199254740991); // Very large number
console.log(largeNumber); // Outputs: 90

// Non Primitive(Reference Data Types)
// Non-primitive data types are more complex and include objects and arrays. These types can store collections of data and are mutable, meaning their content can be changed after creation.
//Objects in JS is like collections of key-value pairs . Think of them like dictionaries or maps .
let person = {
    name: "Alice",
    age: 30,
    isStudent: true,
};
console.log(person.name);
//Arrays : are used to store multiple values in a single variable
// Arrays can hold mixed data types
let mixedArray = [42, "hello", true, { key: "value" }];
console.log(mixedArray[3]); // Outputs: { key: "value" }

//Difference Between Primitive and Non-Primitive Data types
// Primitive DataTypes  : Stored directly in memory
// Immutable : Can't Change the actual value
// Comparison : Primitive Values are compared by thier actual value
let a = 5;
let b = 5;
console.log(a === b);

// Non-Primitive Data Types (Objects and Arrays):
// Stored as a reference to the memory location where the object is stored.
// Mutable: You can modify the contents of an object or array after it’s created.
// Comparison: Non-primitive values are compared by reference, not by value.
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
console.log(obj1 === obj2); // Outputs: false (different references)

//Dynamic Typing in JavaScript : You don't have to declare a variable's type - JavaScript figures it out for you .
let value = 42;
value = "Now I'm a String";
console.log(value);

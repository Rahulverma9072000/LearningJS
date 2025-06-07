// Exercise 1: Handle Division by Zero
// Write a function that divides two numbers.
// If the second number is 0, throw an error.
// Use try...catch to handle the error.

function divide(a, b) {
    if (b == 0) {
        throw new Error("Cannot Divide by Zero");
    } else {
        return a / b;
    }
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n");
// Exercise 2: Custom Error Message
// Write a function that checks if a username is at least 3 characters long.
// If it’s not, throw an error with a custom message.
// Use try...catch to handle the error and print the message.

function checkUserName(name) {
    if (name.length < 3) {
        throw new Error("Not A Valid Name");
    } else {
        return name;
    }
}

try {
    console.log(checkUserName("to"));
} catch (error) {
    console.log("Error :", error.message);
}

try {
    console.log(checkUserName("Alice"));
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n");
// Exercise 3: Use finally for Cleanup
// Write a try...catch...finally block where:
// The try block prints a message.
// The catch block prints an error message if there’s an error.
// The finally block prints "Cleanup complete."

try {
    console.log("Hello World");
    throw new Error("UnExpected Error Comes");
} catch (error) {
    console.log("Error : ", error.message);
} finally {
    console.log("CleanUp Completed");
}

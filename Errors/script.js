//Here No Error is here in Javascript 10/0 results in Infinity and it outputs it
//So catch will not Run
try {
    let result = 10 / 0; // Division by zero
    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
}


//here we have the error so catch will run
try {
    let user;
    console.log(user.name); // This will cause an error
} catch (error) {
    console.log("An error occurred:", error.message);
}



console.log(
    "\nIn 3rd Example We are explicitly throwing error so try , catch and finally all three will work \n"
);
try {
    console.log("Trying some risky code...");
    throw new Error("Oops! Something went wrong.");
} catch (error) {
    console.log("Caught an error:", error.message);
} finally {
    console.log("This will always run.");
}


console.log("\nThrowing Custom Errors\n");
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}
try {
    console.log(divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}

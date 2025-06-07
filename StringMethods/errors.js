try {
  let result = 10 / 0;  // Division by zero
  console.log(result);  // Outputs: Infinity
} catch (error) {
  console.log("An error occurred:", error.message);
}
try {
  let user;
  
  console.log(user.name);  // This will cause an error
} catch (error) {
  console.log("An error occurred:", error.message);
}

try {
  console.log("Trying some risky code...");
  throw new Error("Oops! Something went wrong.");
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("This will always run.");
}

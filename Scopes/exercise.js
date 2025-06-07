//Exercise 1 : Block Scope CHallenge 

if(true){
    let fruit = "Apple";
    console.log(`Inside Block : ${fruit}`);
}

// console.log(`Outside Block : ${fruit}`);  // Reference Error 


// Exercise 2 
function createCounter() {
  let count = 0;  // Private variable inside closure

  return function () {
    count++;
    console.log(`Count: ${count}`);
  };
}

const counter = createCounter();
counter();  // Outputs: Count: 1
counter();  // Outputs: Count: 2
counter();  // Outputs: Count: 3


//Exercise 3 

let message = "Global message";  // Global variable

function showMessage() {
  let message = "Local message";  // Local variable with the same name
  message = "Checking which one updqates ";   // Updating message is only updating local variable not global variable  
  console.log(`Inside function: ${message}`);  // Outputs: Inside function: Local message
}


showMessage();
console.log(`Outside function: ${message}`);  // Outputs: Outside function: Global message



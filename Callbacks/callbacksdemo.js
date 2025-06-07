//After 400ms , this function exec will be run 
//Higher Order Function are those function that takes a fucntion as an argument 
//Function that we pass as an argument is called as Callbacks .
setTimeout(function exec() {
    console.log("Running after sometime ")
} , 1400);
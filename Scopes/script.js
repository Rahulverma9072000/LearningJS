let myGlobalVariable = "Global Variable";
function myFun(){
    //Change the global variable 
    myGlobalVariable = "Rahul";
    console.log("Inside a Function ",myGlobalVariable);
}

function myFun1(){
    let myLocalVariable = "Local Variable";
    console.log("Inside a Function 1",myLocalVariable);
}
myFun();
console.log("Global Variable",myGlobalVariable);
// console.log("Local Variable Outside ",myLocalVariable); // Give ReferenceError 



//Block-Level Scope with let and const : In Javascript , let and const introduce block-level scope , meaning the variable declared with them only exist inside the block {} where they are defined . 

{
    //Block 
}

if(true){
    let myVar = "Rahul";
    console.log("Inside if block : ",myVar);
}
console.log("Block Variable Outside : ",myVar); // Give Reference Error if let and const is used 

//If var is used like above let , it will not give Error
//Because var does not consider this curly braces as a Block 
//THere is nothing Block Scope for ' var keyword ' 
if(true){
    var myVar = "Rahul";
    console.log("Inside if block : ",myVar);
}
console.log("Block Variable Outside : ",myVar); // Now Error does not come become var does not 

function myFun2(){
    var localVar = "Helli ";   
}
// console.log("Function Variable using var outside fucntion ",localVar); // Now var also give Error 



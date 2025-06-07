function fun(){
    console.log(1);
    return 0;
}
console.log("Hello");
console.log("World");
console.log("Bye");

// This is give Syntax Error 
//If it is purely interpreted language than atleast Hello should get printed here 
// THen it is not purely interpreted language 

console.log("Hi");
console.lo("by");
// Here it's printing Hi so its not behaving completely compiled also 

//Its come somewhere in between 
// Not behaving as purely interpreted language nor purely compiled language 

//Every Javascript Code executed in 2 phases : 
// Parsing Phase -> Scope Resolution 
// Executing Phase 

//Types of Scopes in JS : Global , Function , Block 

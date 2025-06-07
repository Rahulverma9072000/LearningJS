/*
    Arrays are also custom Objects in JS 
    index of the element is the key and the element itself is the value 
    ["abc","ghi","def"] -> {0: "abc",1: "ghi,2 : "def"}
*/
// Lot of Functions that comes up with Arrays 
//Map Functions
//First we need to understand the concept of HOF 
// Higher Order Functions 
// These are functions that depends and operate on other Functions . Higher Order Functions takes another function as an argument or return a function  and then execute the logic .

//First we are seeing the inbuilt HOF 
//After learning Scopes and Closures we will make our HOF

// Map is a higher order function available with arrays 
// It takes function as argument -> f and it returns an array in which every value is actually populated by calling 
//function f with original array element as argument 

function square(el){
    return el*el;
}
const arr = [1,2,3,4,5];
const res = arr.map(square);
console.log("Res ",res);
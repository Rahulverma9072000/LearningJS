/**
 * fun -> HOF , it takes fn(which is a function) as arguments 
 * 
 * x -> number 
 * fn -> function
 */

// this function cmp is a callback fucntion 
b.sort(function cmp(a,b){
    return a<b;
}); 

function fun(x,fn){
    for(let i=0;i<x;i++){
        console.log(i);
    }
    fn();
};

fun(10 , function exec(){
    console.log("I am also executed");
});

//Problems with callbacks 
// Callback hell -> Promises -> Promises hell -> async await -> async await hell 

//Problems with Callbacks : 
// 1) Inversion of control 
// 2) Callback hell : It's mpre like a readibility problem (Callback inside a callback .. make code very nested a pyramid like structure ) Code become very nested and it does not understand what it actually wants to do . It's a readibility problem . There is no issue in Business logic just a readibility problem . If its 1 or 2 level of nesting in a callback than it will not going to harm 
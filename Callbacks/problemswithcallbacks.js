/**
 * Problems with Callbacks : 
 * 1) Inversion of Controls 
 * 2) Callback hell -> Readibility Problem 
 */

let arr = [1,10,1000,9,2,3,11];

// sort is the internal function , we know that cmp will be called 
arr.sort(function cmp(a,b){
    return a-b;
})
console.log(arr);

// 2 Team 

//Function fn is coming from team b 
//So bad thing is they are giving the access of thier function to Team A 
//now they can manipulate the function in thier own way .
// And this is known as Inversion of Control 
function doTask(fn , x){
    //whole implementation is done by Team A
    fn(x*x); //Calling my callbacks with square of x 
} //team A


// here team B tries to use it 
doTask( function exec(num){  //due to callabacks i am passing the control of how exec should be called to doTask 
    console.log("Woah num is ",num);
},9);

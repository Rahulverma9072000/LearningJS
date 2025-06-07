function timeConsumingByLoop(){
    console.log("Loop Starts");
    for(let i=0;i<10000000000;i++){
        //some task 
    }
    console.log("Loop Ends");
}

function timeConsumingByRunTimeFeature(){
    console.log("Starting Timer");
    setTimeout(function exec(){
        console.log("Completed the Timer");
    },5000);
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRunTimeFeature();
timeConsumingByLoop();

console.log("Byw");

// Whenever Js runs piece of code , there are lot of things given in memory to JS , 
// Call Stacks , Heap Memory , Multiple Queues 

//Native ECMAScript code will be run synchronously 

//timeConsumingByRunTimeFeature() when this function comes in Call Stack 
// Now JS knows this is not my Native Feature , what JS will do it , its going to notify the RunTime that i got an instruction to start a timer . 
// than JS just immediately come back and start executing next lines . 
// Behind the scene a timer will start in the runtime which is separate 
// Now the next function comes in the CallStack 
//Case 1 : the loop function will be executing in less than 5 sec .
// than this function will execute and after that 5sec timer function will get executed .
//Case 2 : the loop function will be executing and taking more than 5 sec . 
// We never pause synchronous piece of JS code running . 
// THe moment the timer is done there is something called as Event Queue , you can send your callback . 
//After the synchronous Code is done executing it will run the Event Queue . 
//THere is something known as Event Loop its kind of like a infinite loop , it keeps on checking whether the call stack is empty or not and no global piece of code is left . 
function timeConsumingByLoop(){
    console.log("Loop Starts");
    for(let i=0;i<10000000000;i++){
        //some task 
    }
    console.log("Loop Ends");
}

function timeConsumingByRunTimeFeature0(){
    console.log("Starting Timer");
    setTimeout(function exec(){
        console.log("Completed the Timer 0");
        for(let i=0;i<1000000000;i++){
            //waste my time 
        }
    },5000); // 5 sec timer 
}

function timeConsumingByRunTimeFeature1(){
    console.log("Starting Timer");
    setTimeout(function exec(){
        console.log("Completed the Timer 1");
    },5000); // 0 sec timer
}

function timeConsumingByRunTimeFeature2(){
    console.log("Starting Timer");
    setTimeout(function exec(){
        console.log("Completed the Timer 2");
    },5000); // 5 sec timer 
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRunTimeFeature0();
timeConsumingByRunTimeFeature1();
timeConsumingByRunTimeFeature2();
timeConsumingByLoop();

console.log("Bye");
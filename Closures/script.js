function myFun(outside) {
    return function (inside) {
        console.log(`Outer : ${outside} , Inner : ${inside}`);
    };
}
let myNewFun = myFun("Outside");
//Here outside value will be stored already that is called closures
myNewFun("Inside");
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(`Count ${count}`);
    };
}

let counter = createCounter();
counter();
counter();
//Closures means : function able to remember the variable that are accessing even if they are outside that scope .

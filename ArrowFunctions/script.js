//Normal function
function add(a,b){
    return a + b;
}
//Arrow Function 

let addFunction = (a,b) =>{
    return a + b;
}
console.log(addFunction(4,5));


// function multiplyBy2(a){
//     return a*2;
// }

let multiplyBy2 = a => a*2

console.log(multiplyBy2(3))


let greet = () => console.log("Heyy !");

greet();


let obj1 = {
    name : "Rahul" , 
    greet : function() {
        console.log(`Hey , My Name is ${this.name}`);
    }
}

obj1.greet();

//Now change this to an Arrow Function
let obj2 = {
    name : "Rahul",
    greet : () => console.log(`Hey , My Name is ${this.name}`)
}

obj2.greet();

//If you dont need 'this' than we can use Arrow Functions safely . 
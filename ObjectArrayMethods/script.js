let arr = [1,2,3,4,5];
let str = "Rahul";

let obj = {
    "name" : "Rahul"
}
console.log(arr.length);
console.log(str.length);
console.log(obj.length); //undefined 


//Introduction to map , filter and reduce : these are higher order function 
//HOF : Functions take other function as argument 

let Arr = [1,2,3,4,5];
let newArr = Arr.map((value) => 
    2*value
);
console.log(newArr);

//filter is used to filter out element on the basis of conditions 
let op1 = arr.filter(x => x%2==0);
console.log(op1);


//Reduce 

let array = [1,2,3,4,5,6];
let sum = arr.reduce((total , currVal) => total + currVal ,0); //Getting sum 
let factorial = arr.reduce((res,curr) => res*curr , 1);
console.log(sum , factorial);


//Spread Operator : spreads the element of an array or object into individual values . 

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
arr1.push(...arr2);  //spread operator here 
console.log(arr1);

let obj1 = {
    "name" : "Rahul" ,
    "age"  : 23
}

let obj2 = {
    ...obj1 , 
    "height" : 185 ,
    "Profession " : "SDE"
}

console.log(obj2);

//Rest Parameter : collects multiple arguments into an array . It's useful when you don't know how many arguments will be passed to a function


function add(a,b, ...numbers){
    console.log("What's Numbers ",numbers);
    let sum = a + b;
    for(const el of numbers){
        sum += el;
    }
    return sum;
}

let total = add(1,2,3,4,5,6,7);
console.log(total);

const numbers = [1, 2, 3];
const op = numbers.map(num => num * 2);
console.log(op);
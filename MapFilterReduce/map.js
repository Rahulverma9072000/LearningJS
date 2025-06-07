//Here we will learn about map functions
//Map function is used to transform the array
const arr = [5, 1, 3, 2, 6];
//Double the array
function double(a) {
    return a * 2;
}
const doubleArr = arr.map(double);
console.log(doubleArr);
function triple(a) {
    return a * 3;
}
const tripleArray = arr.map(triple);
console.log(tripleArray);
function binary(x) {
    return x.toString(2);
}
const binArr = arr.map(binary);
console.log("Binary Arr ", binArr);
const users = [
    { firstName: "Akshay", lastName: "Saini", age: 26 },
    { firstName: "Tom", lastName: "Sai", age: 46 },
    { firstName: "Bhai", lastName: "frei", age: 86 },
    { firstName: "fre", lastName: "fvre", age: 45 },
];
//We have to make list of fullNames
const output = users.map((user) => user.firstName + " " + user.lastName);
console.log(output);
//Now we want something like Age : Freq
// { 26 : 2 , 86 : 1 , } like this
//We can use reduce here

//initial value of accumulator will be object
//So we will handle operations according to accumulator .
const op = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] += 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(op);
//We have to find out first name of the users whose age is less than 30
const op1 = users
    .filter((user) => {
        return user.age < 30;
    })
    .map((x) => x.firstName);
console.log(op1);
//Do the Same using reduce
const op2 = users.reduce(function (acc, curr) {
    if (curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);
console.log(op2);

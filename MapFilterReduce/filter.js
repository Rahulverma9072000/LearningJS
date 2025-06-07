//Filter functions in Javascript
const arr = [1, 3, 5, 6];
//We use this function to filter out the things
//Filter the values inside an array
//We want to filter out the array which are Odd ?
//Filter Odd valueas
function isOdd(x) {
    return x % 2;
}
function isEven(x) {
    return x % 2 == 0;
}
const output = arr.filter(isOdd);
console.log(output);
const op = arr.filter(isEven);
console.log(op);
//With arrow function
const out = arr.filter((x) => {
    return x % 2 == 0;
});
console.log("THis is out", out);
const filter4 = arr.filter((x) => x > 4);
console.log(filter4);

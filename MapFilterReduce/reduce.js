// reduce in  Javascript
const arr = [5, 1, 3, 2, 6];
//Sum Or Max
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));
//acc:  accumulator , curr : currect
// Accumulator is accumulating the result and curr is like iterating current value
//First value of reduce is function and second one is the initial value of the acc you want to give .
const output = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);
console.log(output);
//FInding Max using Reduce
const output1 = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);
console.log(output1);

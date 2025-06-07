// Exercise 1: Using map()
// Create an array of numbers from 1 to 5.
// Use map() to create a new array with the squares of these numbers.

let arr = [1,2,3,4,5];
arr = arr.map(x => x*x);
console.log(arr);


// Exercise 2: Filtering Even Numbers
// Create an array of numbers from 1 to 10.
// Use filter() to create a new array with only the even numbers.

let arr1 = [1,2,3,4,5,6,7,8,9,10];
arr1 = arr1.filter(x => (x%2==0));
console.log(arr1);

// Exercise 3: Accumulating with reduce()
// Create an array of numbers from 1 to 5.
// Use reduce() to calculate the product of all the numbers.

let arr2 = [1,2,3,4,5];
let res = arr2.reduce((res,curr) => res*curr,1);
console.log(res);
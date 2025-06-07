
// Exercise 1: Add and Remove Elements
// Create an array of your favorite foods.
// Add two more foods to the end using push().
// Remove the first food using shift().


food = ["taco","burrito","jva"];
food.push("ice cream");
food.push("dryFruits");
console.log(food);
food.shift();
console.log(food);

//Exercise 2 
// Exercise 2: Slice and Splice
// Create an array of numbers from 1 to 5.
// Use slice() to create a new array with numbers 2, 3, and 4.
// Use splice() to remove the number 3 from the original array.

const arr = [1,2,3,4,5];
let slicedArr = arr.slice(1,4); //using slice 
console.log(slicedArr);
// Using splice to remove number 3 from the original array 
arr.splice(2,1);
console.log(arr);


// Exercise 3: Loop through an Array
// Create an array of countries.
// Use a for...of loop to print each country to the console.

const countries = ["India","USA","Africa"]
for(const country of countries){
    console.log(country);
}

const fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "orange");
console.log(fruits);
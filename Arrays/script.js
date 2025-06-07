let items = [1,2,3,4,5,6]
console.log(items);
console.log(items[0]);

items.push(8);
console.log(items);

items.pop();
console.log(items);

items.shift();
console.log(items);

items.unshift(10);
console.log(items);

//Start index , Number of elements to delete 
items.splice(1,4);
console.log(items);

items.splice(1,2,10,11,12,13); //NOw here 1,2 idx element will be deleted and instead of them 10,11,12,13 will be added 
console.log(items);

//slice does not changes the original array , it creates a slice and returns it 

// [start Index , end Index)
let slicedItems = items.slice(1,3);
console.log(slicedItems);


//Looping through Arrays 

let arr = [1,2,3,4,5,6];
for(let i = 0;i < arr.length;i +=1){
    console.log(arr[i]);
}

// The for...of loop iterates over the elements directly, making it simpler to use.
for(const element of arr){
    console.log(element);
}

//We have to write a callback function 
// forEach() executes a function on each element of the array. It’s great for short operations.
arr.forEach((value,index) =>{
    console.log(value);
})
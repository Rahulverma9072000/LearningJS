//Arrow Functions SUm 

let addSum = (a,b) =>{
    return a+b;
}

console.log(addSum(2,3));

let greet = () => console.log("Heyy !");




//Correct `this` binding 
let obj1 = {
    name : "Rahul",
    greet : name => console.log(`Hello ${name}`)
}

obj1.greet();

//Using Traditional Methods 

let obj2 = {
    name : "Rahul",
    greet : function(){
        console.log(`heyy ${this.name}`);
    }
}

obj2.greet();


//Arrow Functions in Callbacks 
//Use an Arrow Function with the map methods to convert an array of temperatures from Celsius to Fahraniet 

let temperatures = [12,35,45,56];

//Have to make function for conversion of celsius to fahraniet 

const output = temperatures.map(temp => (((9*temp)/5) + 32 ))
console.log(output);



//Example to demonstrate that arrow function inherit 'this' from the surrounding context 
//it does not takes this from the global context , it takes from the surrounding context 
const person = {
  name: "Alice",
  hobbies: ["reading", "cycling", "traveling"],
  showHobbies: function () {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}.`);
    });
  }
};

person.showHobbies();
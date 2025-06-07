let myStr = "I love JavaScript";
console.log(myStr.length);

console.log(myStr.indexOf("Java"));
console.log(myStr.indexOf("Python"));

console.log(myStr.toLowerCase()); //It returns a new string 
console.log(myStr); //it will not changes the original string 
console.log(myStr.toUpperCase());


let myNewStr = myStr.slice(7,17);
console.log(myNewStr); //Takes the slice from the original array and return it 


let items = "apple,banana,pineapple";
let splitItems = items.split(",");
console.log(splitItems);


// Exercise 1: Extracting with slice()
// Create a string with the value "JavaScript is awesome".
// Use slice() to extract the word "awesome".

let resStr = "JavaScript is Awesome";
let myResStr = resStr.slice(14);
console.log(myResStr);

// Exercise 2: Splitting a Sentence
// Create a string with the value "HTML,CSS,JavaScript".
// Use split() to break it into an array of words.

let lang = "HTML,CSS,JavaScript";
let splitLang = lang.split(",");
console.log(splitLang);

// Exercise 3: Use Template Literals
// Create variables for a first name and last name.
// Use template literals to print "Hello, [first name] [last name]!".

let firstName = "Rahul";
let lastName = "Verma";
console.log(`Hello , ${firstName} ${lastName}`);  //This is called template literal 

const phrase = "JavaScript is amazing!";
console.log(phrase.length);

const sentence = "Learn JavaScript";
console.log(sentence.indexOf("Script"));
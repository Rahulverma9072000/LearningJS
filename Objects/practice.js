//Exercise 1 : Create an Object 

let book = {
    title : "Work Like Hell",
    author : "Rahul Verma",
    pages : "500",
    read : function(){
        console.log(`Reading ${this.title} by ${this.author}`);
    }
};

book.read();


//Exercise 2 : Modify and Delete Properties 

book.genre = "Work is Worship";
book.pages = "300";
delete book["author"];

console.log(book);

//Exercise 3 : Nested Object Challenge 

let movie = {
    title : "Work",
    year : "2025" ,
    details : {
        "director" : "Rahul Verma ",
        "cast" : ["Rahul","Tom","nf"]
    }
}

console.log(movie.title , movie.details.director);

const person = { name: "Alice" };
console.log(person.age);  //undefined will come if you try to access the key that is not present in the object 

console.log(person);
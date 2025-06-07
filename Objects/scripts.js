let myObj = {
    "name" : "Rahul",
    "age" : 24 ,
    greet : function(){
        console.log("Hey ! My name is ",this.name);
    },
    "my work": "SDE" , 
    "courses " : {
        "name " : "Javascript",
        "duration" : "2 Months"
    }
};

// Dot Notation is used when you name property name in advance 
console.log(myObj.age);
myObj.greet();

//Bracket Notation : Use Bracket notation when the property name is stored in a variable or contains special characters  

console.log(myObj["my work"]);

//Adding New Property like this 
myObj.height = 185;
//Modifying Properties 
myObj.height = 189;
console.log(myObj);

//Deleting Properties 
delete myObj["age"];
console.log(myObj);

//Nested Objects : An objects can contain another object as values . These are called Nested Objects . 

console.log(myObj);
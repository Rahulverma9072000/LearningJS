console.log("Hi");
setTimeout(function (){ console.log("Time Done ")},5000);
console.log("Bye");
// here Js is behaving asynchronously 

//Hi 
//Bye 
//Time Done  JS is not waiting on line 2 , On line 2 it's time consuming task but JS is not waiting there 
//it executed next line and printed Bye

//Whenever you run a valid piece of JS code , there is something required to actually run the code called Runtime . 
//inside which we can run JS Code . 
// In order to run a valid piece of JS code , there are lot of libraries, functionality is required , all of these extra functionalities is given to JS in the Runtime . 
// Actually browser is a RunTime , And Providing JS the extra functionalities . 
// For Example : JS does not have the setTimeOut functionalities , its not there . Its a part of Runtime . 
// ie why JS is synchronous to nature with respect to native to Javascript . 
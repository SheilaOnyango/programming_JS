/*var greet = function () {
  console.log("Hello");
};

greet();*/

//Variable Declaration, var greet declares a variable named 'greet'. let or const can also be used based on the need.
//function() {console.log('Hello!');} is an anonymous function, without a name. The function is created as part of the variable assigbment.
//Assignment, the function expression is assigned to the variable greet. Now greet holds a reference to the function.
//the function can be called later using 'greet'
/*Greet Function:

Declare a variable named greet and assign it a function expression. This function should take a name parameter and log a personalized greeting to the console. For example, "Hello, [name]!".
Goodbye Function:

Declare a variable named goodbye and assign it a function expression. This function should take a name parameter and log a personalized goodbye message to the console. For example, "Goodbye, [name]!".
Function Calls:

Call the greet and goodbye functions with different names to test their functionality.*/

var greet = function (name) {
  console.log("Hello," + name + "!");
};

var goodbye = function (name) {
  console.log("goodbye," + name + "!");
};

greet("Alice");
goodbye("Bob");

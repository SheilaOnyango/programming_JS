//functions can accept parameters(inputs)

/*function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); */

// function greet(name) declares a function named greet. name is the parameter of the function.
//the name parameter is used within the function body to construct a greeting message.
//greet(Alice) is a function call. It invokes the greet function and provides the arguement Alice as the value of the name parameter.
//In the function call, Alice is called an arguement and is the actual value that gets passed to the console when calle.

function greet(name) {
  console.log("Hello," + name + "!");
}
greet("Alice");
greet("Bob");
greet("Charlie");

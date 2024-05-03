//Functions are blocks of reusable code that can be defined and called to perfom a specific task. You can declare a function using the 'function' keyword

/*function greet() {
  console.log("Hello");
}

greet();*/

//the name of the function is greet
//the empty parentheses indiacte that the function does not take any parameters. Parameters are placeholders for values a function can receive.
//function body is enclosed in the curly braces, which contains the code to be executed when the function is called.
//inside the body, there is a single line of ciode Console.log('Hello). The line prints sthe string'hello' when the function is called. greet() calls the function and the resul is hello.

function greet(name) {
  console.log("Hello" + name);
}

greet("Sheila");
greet("mum");
greet();

//varaiables declared inside a function are called local to that function.
/*function example() {
  var localVar = "I am local";
  console.log(localVar);
}
example();*/

//function example declares a function named 'example'
//local Variable; Inside the function body, there's a variable declaration var localVar= 'I am local';
//The varibale local var is declared using the var keyword. It is local to the example function meaning it can only be accessed within the scope of this function.
//console.log prints the value of (localVar) to the console.
//Function Call example(); is a function that invokes the example function
//Scope; The variable 'localVar' is local to the 'example' function. It only exists within the curly braces of that function.Trying to acces it outside the function would result in an error because localVar is not defined in the outer scope.

/*Declare a function named celsiusToFahrenheit that takes a parameter celsius.
Inside the function, declare a local variable named fahrenheit and calculate its value using the formula: fahrenheit = (celsius * 9/5) + 32.
Return the calculated fahrenheit value.
Function Call:

Call the celsiusToFahrenheit function with different Celsius temperatures.
Log the results to the console.*/

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;

  return fahrenheit;
}
console.log(celsiusToFahrenheit(23));
console.log(celsiusToFahrenheit(-9));

//A concise way to write functions introduced in ES6

/*var multiply = (a, b) => a * b;

console.log(multiply(2, 3));*/

//var multiply = (a, b) => a * b; This line declares a variable name 'multiply' and assigns it an arrow function. The arrow function takes two parameters (., b) and returns the result of the multiplication 'a' and 'b'. The => syntax is a shorthand for writing functions in a more concise way.
//Function Invocation; console.log(multiply(2, 3)); The line calls the 'multiply' jfunction with arguments '2' and '3' and returns the result which is 6.

//Write an arrow function named calculatePower that takes two parameters, base and exponent, and calculates the result of raising the base to the power of the exponent. Use the arrow function to calculate the power of a base number and an exponent provided as arguments. Output the result to the console.

const calculatePower = (base, exponent) => Math.pow(base, exponent);

console.log(calculatePower(9, 4));

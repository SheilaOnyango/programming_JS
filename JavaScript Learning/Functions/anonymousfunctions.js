//functions can be declared without a name.

/*var square = function (x) {
  return x * x;
};

console.log(square(4));*/

// var square declares a variable named square. The variable is assigned an anonymous function as its value.
//Anonymous function function (x) {return x * x} is an anonymous function. It takes a parameter x and returns the square of x using expression x * x.
//variable Assignment; The anonymous function is assigned to the variable square. Square hence holds a reference to this function.
//Function Call; console.log(square(4)); is a function call. Invokes the function stored in the square variable with the arguement 4.

/*Declare a variable named multiplyByTwo and assign it an anonymous function.
The anonymous function should take a number as a parameter and return the result of multiplying that number by two.
Function Call:

Call the multiplyByTwo function with different numbers.
Log the results to the console.*/

var multiplyByTwo = function (number) {
  return number * 2;
};

console.log(multiplyByTwo(4));
console.log(multiplyByTwo(5));

//functions can return a value using the 'return' statement.

/*function add(a, b) {
  return a + b;
}

var result = add(3, 5);

console.log(result);*/

//function declaration- function add(a, b) {...}declares a function named add. The function takes two parameters, a and b.
//return statement; return a + b; is the return statement inside the function. It specifies that the result of the addition of a and b should be returned when the function is called.
//function call - var result = add(3, 5); is a function call. it invokes the add function with arguements 3 and 5.
//The result of the addition (3+5) is returned by the function and assigned to the variable 'result'
//Output; console.log(result); prints the value of the result to the console.

/*Rectangle Area Function:

Declare a function named calculateRectangleArea that takes two parameters (length and width).
Inside the function, calculate the area of the rectangle using the formula area = length * width.
Return the calculated area.
Function Call:

Call the calculateRectangleArea function with different values for length and width.
Log the results to the console.*/

function calculateRectangleArea(length, width) {
  const area = length * width;
  return area;
}

console.log(calculateRectangleArea(4, 6));
console.log(calculateRectangleArea(10, 15));

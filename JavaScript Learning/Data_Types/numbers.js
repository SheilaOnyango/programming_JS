//Fundamental data types that represents numeric values. Thye can be integer(whole numbers) or floating-point numbers (decimal numbers). They can also be positive or negative.
//converting numbers to strings uses the '.tostring()' method.

/*Convert the following number to a string using the .toString() method and store it in a variable named resultString: */

/*Convert the string "57.34" to a floating-point number using the appropriate method and store it in a variable named floatResult: */

/*let taskString = "57.34";

let floatResult = parseFloat(taskString);
console.log(floatResult); */

/*Given the number 12.98765, use the toFixed() method to limit it to 2 decimal places. Store the result in a variable named limitedDecimal: */

/*Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision. */

/*function fahrenheitToCelsius() {
  let answer = ((Fahrenheit - 32) * 5) / 9;

  return answer.tofixed(1);
}

console.log(answer); */

/*
- Create a variable named 'num1' and assign it a floating-point value.
- Create a variable named 'num2' and assign it a different floating-point value.

- Round both 'num1' and 'num2' to the nearest integer and store the results in variables 'roundedNum1' and 'roundedNum2'.
- Calculate the square root of 'roundedNum1' and store it in a variable named 'sqrtNum1'.
- Find the larger number between 'roundedNum1' and 'roundedNum2' and store it in a variable named 'maxNum'.

- Use console.log() to print 'roundedNum1', 'roundedNum2', 'sqrtNum1', and 'maxNum' to the console.
- Use the typeof operator to check the data type of each new variable and print the result using console.log().
*/

let num1 = 14.12;
let num2 = 9.23;

let roundedNum1 = Math.round(num1);
let roundedNum2 = Math.round(num2);

let sqrtNum1 = Math.sqrt(roundedNum1);

let maxNum = Math.max(roundedNum1, roundedNum2);

console.log("roundedNum1:", roundedNum1);
console.log("roundedNum2:", roundedNum2);
console.log("sqrtNum1:", sqrtNum1);
console.log("maxNum:", maxNum);

console.log("Type of roundedNum1:", typeof roundedNum1);
console.log("Type of roundedNum2:", typeof roundedNum2);
console.log("Type of sqrtNum1:", typeof sqrtNum1);
console.log("Type of maxNum:", typeof maxNum);

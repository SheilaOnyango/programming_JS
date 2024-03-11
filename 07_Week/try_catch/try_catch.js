"use strict";

// Task 1: Basic Try-Catch Usage
/*
Wrap the code inside a try-catch block to catch potential errors.
Log 'An error occurred' in the catch block.
*/

function task1() {
  try {
    throw new Error("Oops, something went wrong!");
  } catch (error) {
    console.log(error.message);
  }
}

// Task 2: Catching ReferenceError
/*
Attempt to access an undefined variable inside a try block.
Catch the ReferenceError and log it to the console.
*/

function task2() {
  try {
    console.log(fox);
  } catch (error) {
    console.error(error);
  }
}

// Task 3: Using Finally
/*
Use a try-catch-finally block. In the finally block, log 'Execution completed'.
*/

function task3() {
  try {
    console.log("Inside try block");
    console.log(fox);
    throw new Error("Test error");
  } finally {
    console.log("Execution completed");
  }
}

// Task 4: Nested Try-Catch
/*
Inside a try block, nest another try-catch block.
Simulate an error in the nested try block and handle it in the nested catch block.
*/

function task4() {
  try {
    console.log("Outer try block");
    try {
      throw new Error("Nested error occured");
    } catch (error) {
      console.log("Nested catch block: , error.message");
    }
  } catch (error) {
    console.log("outer catch block: , error.message");
  }
}

// Task 5: Function with Try-Catch
/*
Create a function that uses try-catch to handle an array index out of bounds error.
*/

function task5(array, index) {
  try {
    if (index < 0 || index >= array.length) {
      throw new Error("Index out of bounds");
    }
    console.log("Value:", array[index]);
  } catch (error) {
    console.error(error.message);
  }
}

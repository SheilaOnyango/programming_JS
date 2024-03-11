// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

let numbers = 0;
let sumOfNumbers = 0;

while (true) {
  let inputNumber = Number(
    prompt("Please enter numbers. To terminate enter 0.")
  );

  if (inputNumber === 0) {
    break;
  }

  sumOfNumbers += inputNumber;
  numbers++;
}
if (numbers > 0) {
  console.log(`Average is: ${sumOfNumbers / numbers}`);
} else {
  console.log("No numbers entered.");
}

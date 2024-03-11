// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

let inputNumber;
let amountOfNumbers = 0;
let sumOfNumbers = 0;
let shouldStop = " ";

while (shouldStop.toLowerCase() !== "n") {
  inputNumber = Number(prompt("Please input a number"));

  if (isNaN(inputNumber)) {
    console.log("Invalid input. Please enter a valid number.");
    continue;
  }

  amountOfNumbers++;
  sumOfNumbers += inputNumber;
  shouldStop = prompt("Do you want to continue giving numbers? (y/n):");
}

if (amountOfNumbers > 0) {
  console.log(
    `The average of all input numbers is: ${(
      sumOfNumbers / amountOfNumbers
    ).toFixed(2)} (${sumOfNumbers} / ${amountOfNumbers})`
  );
} else {
  console.log("No numbers entered.");
}

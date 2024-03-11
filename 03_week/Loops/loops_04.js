// Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.

let sum = 0;
let counter = 0;

do {
  let input = Number(prompt("Enter a number"));
  sum += input;
  counter++;
} while (counter !== 20);

console.log(`Average was ${sum / counter}`);

let evenCount = 0;

for (let numbers = 0; numbers < 20; numbers++) {
  let data = Number(prompt("Input a number"));
  if (data % 2 === 0) {
    evenCount++;
  }
}

console.log(`Number of even numbers: ${evenCount}`);

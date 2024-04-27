// Generate a random number between 1 and 20 (inclusive) and assign it to the constant variable secretNumber
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Define a variable score with an initial value of 20, representing the player's current score
let score = 20;

// Define a variable highScore with an initial value of 0 to keep track of the highest score achieved by the player
let highScore = 0;

// Add an event listener to the HTML element with the class check that listens for a click event and executes the provided function when clicked
document.querySelector(".check").addEventListener("click", function () {
  // Retrieve the value entered by the player in an input field with the class "guess" and convert it to a number, storing it in the variable guess
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess); // Log the guess and its type to the console
});

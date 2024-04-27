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

//Add if/else statements to check if the conditions are met

if (!guess) {
  displayMessage("⛔️ No number!");
} else if (guess === secretNumber) {
  document.querySelector(".message").textContent = "Correct Number!";
  if (score > highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  } //checks if the score is greater than the highscore. If true, it updates the highscore to the current score.
} else if (guess > secretNumber) {
  if (score > 1) {
    document.querySelector(".message").textContent = "📈 Too high!";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "💥You lost the game!";
    document.querySelector(".score").textContent = 0;
  }
} else if (guess < secretNumber) {
  if (score > 1) {
    document.querySelector(".message").textContent = "📉 Too low!";
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "💥You lost the game!";
    document.querySelector(".score").textContent = 0;
  }
}

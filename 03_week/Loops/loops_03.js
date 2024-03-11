// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

let distance, time;

while (true) {
  distance = Number(prompt("Enter distance in kilometers"));

  if (distance == 0) {
    console.log("Distance is 0 - Game over");
    break;
  }

  time = Number(prompt("Enter time in hours"));
  let average = distance / time;
  console.log("Average speed is:", average);
}

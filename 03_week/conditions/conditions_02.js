/*
Create a program getTemperature that asks the user to input a temperature in 
Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */
function getTemperature(temperature) {
  if (temperature < 15) {
    console.log("Should wear a jacket");
  } else {
    console.log("Do not wear a jacket");
  }
}

let example = prompt("What is the current temperature?");
let number = Number(example);

getTemperature(number);

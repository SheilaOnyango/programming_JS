/* Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.*/

function magic8Ball() {
  const randomNumber = Math.floor(Math.random() * 8 + 1);

  switch (randomNumbe) {
    case 1:
      return "Yes, why not?";
    case 2:
      return "No, not likely.";
    case 3:
      return "Ask a little bit later.";
    case 4:
      return "Hard to predict now.";
    case 5:
      return "I am not sure.";
    case 6:
      return "Don't be so hopeful.";
    case 7:
      return "Not looking so good";
    case 8:
      return "It could be a yes";
    default:
      return "Sorry, something went wrong";
  }
}

let question = prompt("Ask a yes-or-no question:");
let response = magic8Ball(question);

console.log(response);

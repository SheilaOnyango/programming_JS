/*Write JavaScript code that selects content id by using getElementByI.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

/*

/*const textChanger = () => {
  const textPlaceholder = document.getElementById("content");
  textPlaceholder.innerHTML = '<button onclick=" ">Change text</button>';
};*/

const textChanger = () => {
  document.getElementById("content").textContent = "Hello World!";
};

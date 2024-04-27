// Select elements
const form = document.querySelector(".form-container");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector("#type");
const orderButton = document.querySelector("#orderButton");
const totalPriceElement = document.querySelector("#totalPrice");
const priceBanner = document.querySelector(".price-banner");
const orderContainer = document.getElementById("order-container");

// Define variables
let total = parseInt(typeSelect.value);
let toppings = [];
let extras = [];

// Function to calculate pancake price
const pancakePriceCalc = () => {
  // Update total price and display
  total = parseInt(typeSelect.value);
  totalPriceElement.textContent = `$${total}`;
  // Check for selected toppings
  checkToppings();
  // Animate price banner
  animatePriceBanner();
};

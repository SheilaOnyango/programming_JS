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

// Function to add an item to toppings or extras array
const addItem = (itemName, category) => {
  // Push the item to the appropriate array based on the category
  (category === "toppings" ? toppings : extras).push(itemName);
};

// Function for removing items
const removeItem = () => {};

// Function to check selected toppings
const checkToppings = () => {
  // Reset toppings and extras arrays
  toppings = [];
  extras = [];
  // Reset total with the pancake type value
  total = parseInt(typeSelect.value);

  // Iterate over checkboxes to check for selected toppings
  checkboxes.forEach((item) => {
    const itemName = item.dataset.name;
    const category = item.dataset.category;

    if (item.checked) {
      // Update total and add selected topping
      total += parseInt(item.value);
      addItem(itemName, category);
    } else {
      // Placeholder for removing unchecked items (currently empty)
      removeItem(itemName, category);
    }
  });
  // Display updated total price
  totalPriceElement.textContent = `$${total}`;

  // Logging arrays for debugging
  console.log("toppings array", toppings);
  console.log("extras array", extras);
};

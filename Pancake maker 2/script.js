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

// Function to animate price banner
const animatePriceBanner = () => {
  priceBanner.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.05)" },
      { transform: " scale(1)" },
    ],
    {
      duration: 100,
      iterations: 1,
    }
  );
};

// Function to create order card
const createOrderCard = (customerName) => {
  const card = document.createElement("div");
  const h3 = document.createElement("h3");
  const cardType = document.createElement("p");
  const cardToppings = document.createElement("p");
  const cardExtras = document.createElement("p");
  const cardName = document.createElement("p");

  // Generate random order number
  const orderNumber = Math.floor(Math.random() * 90000) + 10000;

  // Set text content for elements
  h3.textContent = `Order: ${orderNumber}`;
  cardType.textContent = `Type: ${typeSelect.selectedOptions[0].text}`;
  cardToppings.textContent = `Toppings: ${toppings.join(", ")}`;
  cardExtras.textContent = `Extras: ${extras.join(", ")}`;
  cardName.textContent = `Name: ${customerName}`;

  // Add class to card
  card.className = "order-card";

  // Append elements to card
  card.append(h3, cardType, cardToppings, cardExtras, cardName);

  return card;
};

//Add EventListeners for both form and button
form.addEventListener("change", pancakePriceCalc);
orderButton.addEventListener("click", displayOrder);

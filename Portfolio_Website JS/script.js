//Select elements
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const scrollUp = document.querySelector("#scroll-up");
const navLink = document.querySelectorAll(".nav-link");

// Add an event listener to the hamburger menu button
burger.addEventListener("click", () => {
  // Toggle the "show" class on the unordered list element to display/hide the menu
  ul.classList.toggle("show");
});

// Add event listeners to the navigation links
navLink.forEach((link) =>
  // When a navigation link is clicked
  link.addEventListener("click", () => {
    // Remove show from the unordered list to hide the menu
    ul.classList.remove("show");
  })
);
// Add an event listener to the scroll-up button
scrollUp.addEventListener("click", () => {
  // Scroll the window to the top with smooth animation
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

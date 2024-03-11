const form = document.querySelector(".form-container");

const priceCalc = () => {
  const typeSelect = document.querySelector("#type");
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const priceBanner = document.querySelector("#totalPrice");

  let totalAmount = parseInt(typeSelect.value);

  for (const item of checkboxes) {
    if (item.checked) {
      totalAmount += parseInt(item.value);
    }
  }

  priceBanner.textContent = `$${totalAmount}`;
};

form.addEventListener("change", priceCalc);

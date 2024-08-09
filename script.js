const finalPrice = document.querySelector(".totalPrice");

const selectedItem = document.querySelector(".selectedTicket");
const selectedNumberOfTicket = document.querySelector(
  ".selectedNumberOfTicket"
);
const checkboxZpatecni = document.querySelector(".zpatecni");
const myAmountOfMoney = document.querySelector(".myAmountOfMoney");
const checkButton = document.querySelector(".checkMoney");
const textarea = document.querySelector(".poznamka");

const allowedCharsPattern = /[^\p{L}\p{N}\s]/gu;

selectedItem.addEventListener("click", updatePrice);
selectedNumberOfTicket.addEventListener("click", updatePrice);
checkboxZpatecni.addEventListener("click", updatePrice);
document.querySelectorAll("input[name='class']").forEach((input) => {
  input.addEventListener("change", updatePrice);
});
checkButton.addEventListener("click", checkAvailability);
textarea.addEventListener("input", removeDisallowedChars);

var totalPrice = 500;

function updatePrice() {
  totalPrice = 0;

  var selectedTicket = document.querySelector(".listOfTickets");
  var priceOfSelectedTicket = selectedTicket.value;

  var selectedNumberOfTickets = document.querySelector(".numberOfTickets");
  var valueOfNumberOfSelectedTickets = selectedNumberOfTickets.value;
  totalPrice += valueOfNumberOfSelectedTickets * priceOfSelectedTicket;

  if (checkboxZpatecni.checked) {
    totalPrice = totalPrice * 2;
  }
  var selectedClassValue = document.querySelector(
    "input[name='class']:checked"
  );

  switch (selectedClassValue.value) {
    case "economy":
      totalPrice = totalPrice;
      break;
    case "bussiness":
      totalPrice = totalPrice * 1.25;
      break;
    case "royal":
      totalPrice = totalPrice * 1.5;
      break;
  }
  finalPrice.textContent = "Total price: " + totalPrice + " Kč";
}

function checkAvailability() {
  const availabilityText = document.querySelector(".textForAvailability");
  if (myAmountOfMoney.value >= totalPrice) {
    availabilityText.textContent = "Congratulations! You can afford this!";
  } else {
    availabilityText.textContent = "I'm sorry, you cannot afford this.";
  }
}

function removeDisallowedChars() {
  const currentValue = textarea.value;
  textarea.value = currentValue.replace(allowedCharsPattern, "");
}

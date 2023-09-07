const ageInput = document.getElementById("age");
const countryInput = document.getElementById("country");
const drunkLevelInput = document.getElementById("drunk");
const displayMessage = document.getElementById("message");
const form = document.querySelector("form");
const message = document.getElementById("message");
const image = document.getElementById("bottleColor");
const button = document.getElementById("btn");

const appendElementWithText = (elementType, text, parent) => {
  const newElement = document.createElement(elementType);
  const textNode = document.createTextNode(text);
  newElement.appendChild(textNode);
  parent.appendChild(newElement);
};

const reason = () => {
  if (
    ageInput.value < 18 ||
    (countryInput.value === "USA" && ageInput.value < 21)
  ) {
    return "you're underage";
  } else if (drunkLevelInput.value > 0) {
    return "you're drunk";
  }
};

const allowedIn = (e) => {
  e.preventDefault();
  if (message.firstChild) {
    message.removeChild(message.firstChild);
  }

  if (
    drunkLevelInput.value > 0 ||
    ageInput.value < 18 ||
    (countryInput.value === "USA" && ageInput.value < 21)
  ) {
    appendElementWithText("p", `You can't come in because ${reason()}`, message);
    image.style.fill = "red";
    button.style.backgroundColor = "red";

    return;
  }

  appendElementWithText("p", "Come in!", message);
  image.style.fill = "green";
  button.style.backgroundColor = "green";
};

form.addEventListener("submit", allowedIn);

let button = document.querySelector("button");
let input = document.querySelector("input");
let ulElement = document.querySelector("ul");

button.addEventListener("click", function () {
  ulElement.appendChild(document.createElement("li")).textContent = input.value;
  input.value = "";
});

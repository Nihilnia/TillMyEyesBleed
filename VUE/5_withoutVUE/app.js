let goal = document.getElementById("goal");
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("ul").innerHTML += `<li>${goal.value}</li>`;
  goal.value = "";
});

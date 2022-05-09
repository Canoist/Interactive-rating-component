const ul = document.querySelector("ul");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const finalCard = document.querySelector(".center");

ul.addEventListener("click", (event) => {
  const liAll = document.querySelectorAll("li");
  liAll.forEach((li) => li.classList.remove("selected"));
  result.textContent = `You selected out ${event.target.innerText} of 5`;
  event.target.classList.add("selected");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.toggle("hidden");
  finalCard.classList.toggle("hidden");
});

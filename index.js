/* const header = document.querySelector("h1");
console.log(header.parent);

const DOMSelector = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelector("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
};

function changeColor() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event.target);
    button.style.backgroundColor = "red";
  });
}
changeColor();

const DOMSelectors = {
  header: document.querySelectorAll("h1"),
  description: document.querySelectorAll(".card-desc"),
  items: document.querySelectorAll("li"),
};
let button = document.querySelector("form");
button.addEventListener("submit", function (event) {
  event.preventDefault();
});

const item = document.querySelectorAll("li");
const items = Array.from(item); //make nodelist into array
console.log(item);
//Node list not an array but has several of the array methods does not have filter

items.forEach((el) => (el.style.color = "red"));

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  })
);
let album = {
  name: "Abbey Road",
};
DOMSelector.container.insertAdjacentHTML(
  "beforeend",
  '<div class="card"><h2 class="card-header">text</h2></div>'
);

//event listener for form
//get values from form for widget object
//create the card insert the card
//find remove buttons and add event listenders */

const DOMSelectors = {
  button: document.querySelector(".btn"),
  form: document.querySelector(".form"),
};

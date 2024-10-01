const header = document.querySelector("h1");
console.log(header.parent);

const DOMSelector = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelector("li"),
};
const student = {
  name: "mark",
  age: 16,
};
console.log(DOMSelector.items);

function changeColor() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault;
    console.log(event.target);
  });
}
changeColor();

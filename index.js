const DOMSelectors = {
  form: document.querySelector(".form"),
  container: document.querySelector(".container"),
  title: document.querySelector("#title-name"),
  img: document.querySelector("#img"),
  desc: document.querySelector("#desc"),
};

function createCardObject(title, imgUrl, desc) {
  return { title, imgUrl, desc }; //sends an object containing the parameters back to the calling function
}

function clearInputs() {
  DOMSelectors.title.value = "";
  DOMSelectors.img.value = "";
  DOMSelectors.desc.value = "";
  //clears inputs by setting values back to normal (blank)
}

function addCard(title, imgUrl, desc) {
  const cardHTML = `
    <div class="card">
      <h4>${title}</h4>
      <img
        src="${imgUrl}"
        alt="Image URL was invalid :("
        width="100%"
        height="auto"
      ></img>
      <p>${desc}</p>
      <button class="delete-btn">Delete</button>
    </div>`;
  //backticks turn the code into a template literal, allowing variables to be directly injected into HTML without extra parentheses or messing with the formatting

  DOMSelectors.container.insertAdjacentHTML("beforeend", cardHTML);

  const deleteBtn =
    DOMSelectors.container.lastElementChild.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    deleteBtn.parentElement.remove();
    // lastElementChild targets the most recently added card, allowing its delete button to work, while parentElement ensures that the button only deletes the card it belongs to
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const title = DOMSelectors.title.value.trim();
  const imgUrl = DOMSelectors.img.value.trim();
  const desc = DOMSelectors.desc.value.trim();
  //trim deletes any spaces from the beginning or end of the text
  if (title && imgUrl && desc) {
    const card = createCardObject(title, imgUrl, desc);
    addCard(card.title, card.imgUrl, card.desc);
    clearInputs();
  }
}

DOMSelectors.form.addEventListener("submit", handleSubmit);

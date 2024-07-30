const orderBtn = document.querySelector(".intro__button");
const orderBlock = document.querySelector(".modal-container");
const closeOrderBtn = document.querySelector(".modal__close-button");

orderBtn.addEventListener("click", () => {
  orderBlock.classList.remove("modal-container-close");
});

closeOrderBtn.addEventListener("click", () => {
  orderBlock.classList.add("modal-container-close");
});

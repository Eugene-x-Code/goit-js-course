/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
const modalBackdrop = document.querySelector(".js-modal-backdrop")

btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", handleBackdrop);

function openModal() {
  modal.classList.remove("modal-hidden");
};

function closeModal() {
  modal.classList.add("modal-hidden");
};

function handleBackdrop(event) {
  if (this !== event.target) return;
  closeModal();
}
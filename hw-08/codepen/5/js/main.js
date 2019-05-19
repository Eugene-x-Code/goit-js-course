/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

const images = document.querySelector(".images");

images.addEventListener("click", srcAlert);

function srcAlert (event) {
  event.preventDefault();
  const target = event.target;
  alert(target.getAttribute("src"));
}
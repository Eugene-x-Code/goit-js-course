/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const nav = document.querySelector(".js-menu");

nav.addEventListener("click", handleNavClick);

function handleNavClick(event) {
  event.preventDefault();
  const target = event.target;

  if (target.nodeName !== "A") return;
  setActiveLink(target);
}

function setActiveLink(nextActiveLink) {
  const currentActiveLink = nav.querySelector("a.active");

  if (currentActiveLink) {
    currentActiveLink.classList.remove("active");
  }
  nextActiveLink.classList.add("active");
}

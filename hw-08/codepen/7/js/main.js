/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

const list = document.querySelector(".input-list");

list.addEventListener("change", findRightField);

function findRightField(event) {
  const target = event.target;
  (Number(target.dataset.length) === target.value.length) 
    ? target.classList.add("valid")
    : target.classList.add("invalid")
}

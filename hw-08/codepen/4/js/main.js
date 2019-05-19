/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

const form = document.querySelector('.question-form');
const checks = document.querySelectorAll('[name="option"]');
const res = document.querySelector('.result');

form.addEventListener('submit', showValue)

function showValue () {
  event.preventDefault();
  
  checks.forEach(element => {if(element.checked) {res.textContent = `Result: ${element.value}`;}})
};
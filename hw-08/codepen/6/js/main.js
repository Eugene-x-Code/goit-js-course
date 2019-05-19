/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

const list = document.querySelector('.list');
list.addEventListener('click', removeEl)

function removeEl(event) {
  const target = event.target;
  const el = target.parentNode;
  if(target.nodeName !== 'BUTTON') return;
  el.remove();
};
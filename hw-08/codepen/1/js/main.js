/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/


const button = document.querySelector(".button");

let counter = 0;
const btnCounter = function() {
  counter += 1;
  button.textContent = counter;
}

button.addEventListener("click", btnCounter);
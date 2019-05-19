/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

const input = document.querySelector("input");
const inputValue = document.querySelector(".input-value");
const message = document.querySelector(".message");

input.addEventListener("focus", messRender);
input.addEventListener("input", copyText);

function messRender() {
  message.textContent = "Input is in focus!";
}

function copyText() {
  const text = input.value;
  inputValue.textContent = `Current input value: ${text}`
}



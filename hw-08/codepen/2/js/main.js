/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

const inputs = Array.from(document.querySelectorAll(".input-number"));
const result = document.querySelector(".result");
const btn = document.querySelector(".sum-btn");

const sumCounter = function() {
  inputs.reduce((acc, el) => result.textContent = acc + Number(el.value), 0);
}

btn.addEventListener("click", sumCounter);

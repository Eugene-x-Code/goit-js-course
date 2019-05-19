/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

class Counter {
  constructor(onChange) {
    this.onChange = Number(onChange);
  }
  
  increment() {
    this.onChange += 1;
    return this.onChange;
  }

  decrement() {
    this.onChange -= 1;
    return this.onChange; 
  }
}

const buttons = document.querySelectorAll(".btn");
const value = document.querySelector(".value");
const counter = new Counter(value.textContent);

buttons[1].addEventListener("click", () => {value.textContent = counter.increment();});
buttons[0].addEventListener("click", () => {value.textContent = counter.decrement();});

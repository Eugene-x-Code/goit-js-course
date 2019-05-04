"use strict";

/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

const root = document.querySelector("#root");

const getColor = function () {return ("#" + Math.random().toString(16).slice(2, 8));};

const createBoxes = function(num) {
  let defSize = 40;
  const boxMas = [];
  for(let i = 0; i < num; i += 1) {
    defSize += 20;
    const box = document.createElement("div");
    box.style.width = defSize + "px";
    box.style.height = defSize + "px";
    box.style.backgroundColor = getColor();
    boxMas.push(box);
  }
  root.append(...boxMas);
};

createBoxes(8);
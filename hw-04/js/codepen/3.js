"use strict";

/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

const countProps = (obj) => {
  let keys = Object.keys(obj);
  return keys.length;
}

// Вызовы функции для проверки
console.log(
  countProps({})
); // 0

console.log(
  countProps({a: 1, b: 3, c: 'hello'})
); // 3
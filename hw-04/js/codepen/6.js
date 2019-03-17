"use strict";

/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful'},
  { name: 'Ajax', age: 3, mood: 'tired' }
];

const getAllPropValues = (arr, prop) => {
  let propArr = [];
    for (let obj of users) {
      if (obj.hasOwnProperty(prop)) {
        propArr.push(obj[prop]);
      }
    }
  return propArr;
}

// Вызовы функции для проверки
console.log(
  getAllPropValues(users, 'name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues(users, 'mood')
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues(users, 'active')
); // []


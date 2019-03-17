"use strict";

/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 352,
  helen: 1,
  lorence: 99
};

let betterThanYou = 0;
let betterThanYouName;

for (let key in tasksCompleted) {
  if(betterThanYou < tasksCompleted[key]) {
    betterThanYou = tasksCompleted[key];
    betterThanYouName = key;
  }
}

console.log(`${betterThanYouName}: ${betterThanYou}`);
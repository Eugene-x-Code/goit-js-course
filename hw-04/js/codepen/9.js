"use strict";

/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

const User = function(name, age, friends) {
  this.name = name;
  this.age = age;
  this.friends = friends;

  this.getInfo = function() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
  }
}

const mango = new User("Mango", 2, 20);
mango.getInfo(); // User Mango is 2 years old and has 20 friends

const poly = new User("Poly", 3, 17);
poly.getInfo(); // User Poly is 3 years old and has 17 friends

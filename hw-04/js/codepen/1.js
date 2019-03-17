"use strict";

/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user["mood"] = "happy";
user.hobby = "javascript";
user.premium = false;

const keys = Object.keys(user);

console.log("KEYS---------------------------------------");
for (let key of keys) {
console.log(`${key} : ${user[key]}`);
}

const entries = Object.entries(user);

console.log("ENTRIES-------------------------------------");
for (let entrie of entries) {
  console.log(`${entrie[0]}:${entrie[1]}`)
}

console.log(user);
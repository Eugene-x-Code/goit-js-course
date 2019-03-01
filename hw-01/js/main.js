"use strict";

/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

const adminLogin = "admin";
const adminPassword = "123";

const userLoginInput = prompt("Введите логин:");
const userAlertCancel = "Отменено пользователем!";

if (userLoginInput === null) {
  alert(userAlertCancel);
} else if (userLoginInput === adminLogin) {
  const userPasswordInput = prompt("Введите пароль:");

  if (userPasswordInput === null) {
    alert(userAlertCancel);
  } else if (userPasswordInput === adminPassword) {
    alert("Добро пожаловать!");
  } else {
    alert("Доступ запрещен, неверный пароль!");
  }
} else {
  alert("Доступ запрещен, неверный логин!");
}

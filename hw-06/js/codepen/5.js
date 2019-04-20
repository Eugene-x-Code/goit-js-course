"use strict";

/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
  constructor({ maxSpeed = 0, price = 0}) {
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.running = false;
    this.distance = 0;
    this.price = price;
    /*
      Добавь свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        - maxSpeed - для хранения максимальной скорости 
        - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
        - distance - содержит общий киллометраж, изначально с 0
    */
  }

  get value () {
    return this.price;
  }


  set value (newValue) {
    this.price = newValue;
  }

  turnOn() {
    this.running = true;
    // Добавь код для того чтобы завести автомобиль
    // Просто записывает в свойство running значание true
  }

  turnOff() {
    this.running = false;
    // Добавь код для того чтобы заглушить автомобиль
    // Просто записывает в свойство running значание false
  }

  accelerate(spd) {
    if (spd <= this.maxSpeed) { this.speed = spd; };
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed
  }

  decelerate(spd) {
    if (spd <= this.maxSpeed && spd > 0) { this.speed = spd; };
    // Записывает в поле speed полученное значение, при условии что
    // оно не больше чем значение свойства maxSpeed и не меньше нуля
  }

  drive(hours) {
    this.distance = hours * this.speed;
    // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
    // но только в том случае если машина заведена!
  }

  static getSpecs = function(obj) {
    console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, running: ${obj.running}, distance: ${obj.distance}`);
  }
}

const car = new Car({ maxSpeed: 100 });

console.log(car.speed);
console.log(car.maxSpeed);
console.log(car.running);
console.log(car.distance);

car.turnOn();
car.accelerate(10);
car.drive(12);

console.log(car.speed);
console.log(car.maxSpeed);
console.log(car.running);
console.log(car.distance);

/*
* Добавь к классу Car из предыдущего задания статический
* метод getSpecs, который принимает объект-машину как параметр
* и выводит в консоль значения полей maxSpeed, speed, running и distance.
*/



const carMini = new Car({ maxSpeed: 120 });
carMini.turnOn();
carMini.accelerate(50);
carMini.drive(2);

Car.getSpecs(carMini); // maxSpeed: 120, speed: 50, running: true, distance: 100

/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/

const carTaxi = new Car({ maxSpeed: 50, price: 2000 });
console.log(carTaxi.value); // 2000

carTaxi.value = 4000;
console.log(carTaxi.value); // 4000


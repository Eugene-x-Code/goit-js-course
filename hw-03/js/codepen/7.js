/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers = [2, 1, 4, 9];

const addUniqueNumbers = function(...args) {
  const argsMax = args.length;
  const numMax = uniqueNumbers.length;

  console.log(`Argument array: ${args}`);
  console.log(`Base numbers array: ${uniqueNumbers}`);

  for (let i = 0; i < argsMax; i += 1) {
    let validation = true;

    for (let j = 0; j < numMax; j += 1) {
      if (uniqueNumbers[j] === args[i]) {
        validation = false;
      }
    }
    if (validation) {
      uniqueNumbers.push(args[i]);
    }
  }
};

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(uniqueNumbers); // [2, 1, 4, 9, 3, 12, 19, 5, 8]

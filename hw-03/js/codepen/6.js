/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

const findLargestNumber = function(numbers) {
  let longestNumber = 0;
  for (let el of numbers) {
    if (longestNumber < el) {
      longestNumber = el;
    }
  }
  return longestNumber;
};

// Вызовы функции для проверки
console.log(findLargestNumber([1, 2, 3])); // 3

console.log(findLargestNumber([27, 12, 18, 5])); // 27

console.log(findLargestNumber([31, 128, 14, 74])); // 128

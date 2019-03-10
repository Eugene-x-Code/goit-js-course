/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/

const findLongestWord = function(str) {
  if (typeof str !== "string") {
    return "Error";
  } else {
    let arrStr = str.split(" ");
    let longestWord = 0,
        anwser;
    for (let el of arrStr) {
      if (longestWord < el.length) {
        longestWord = el.length;
        anwser = el;
      }
    }
    return anwser;
  }
};

// Вызовы функции для проверки
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

console.log(findLongestWord(13212412)); // 'Error'

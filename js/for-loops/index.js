//CHALLENGE: Sum of n
const sum = (n) => {
  let totalSum = 0;
  for (let i = 0; i <= n; i++) {
    totalSum = totalSum + n - i;
  }
  return totalSum;
};

console.log(sum(10));

//BONUS
//recursion
const sumRecursion = (n) => {
  if (n == 1) return 1;
  return n + sumRecursion(n - 1);
};
console.log(sumRecursion(10));
//maths formula
const sumFormula = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(sumFormula(10));

//CHALLENGE: Write a shopping list
const list = [
  "milk",
  "watermelon",
  "eggs",
  "soap",
  "butter",
  "apples",
  "ice-cream",
];

const addNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = `${i + 1}. ${array[i]}`;
    console.log(array[i]);
  }
};

addNumber(list);

//CHALLENGE: Captalizing Odd Positioned Letters
const str = "parar";
const vowels = "aeiouAEIOU";

const capitalize = (word) => {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      //BONUS
      newWord += String.fromCharCode(word.charCodeAt(i) + 1);
    } else if (i % 2 === 1) {
      newWord += word[i].toUpperCase();
    }
  }
  return newWord;
};

console.log(capitalize(str));

//CHALLENGE: Removing vowels
const string = "aganas";
const vowelsTest = "aeiouAEIOU";
const consTest = "lmrLMR";

const removeVowels = (word) => {
  let noVowels = "";
  for (let i = 0; i < word.length; i++) {
    if (vowelsTest.includes(word[i])) {
      if (consTest.includes(word[i + 1])) {
        noVowels += word[i];
      }
      noVowels += "";
    } else {
      noVowels += word[i];
    }
  }
  return noVowels;
};

console.log(removeVowels(string));

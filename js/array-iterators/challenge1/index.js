// Callback function

const capitaliseFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const invertWord = (word) => {
  return word.split("").reverse().join("");
};

const deleteFistLetter = (word) => {
  return word.slice(1);
};

const alterSentence = (sentence, callback) => {
  const array = sentence.split(" ");
  const newSentence = array.map((word) => callback(word));
  return newSentence.join(" ");
};

console.log(alterSentence("hello friend amigo", deleteFistLetter));

// Filter iterator

const scores = [20, 30, 40, 50];
const passingScores = scores.filter((score) => score >= 25);

console.log(passingScores);

// Challenge: Do the same with loops

const filterScores = (array, predicate) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(filterScores([1, 2, 3, 4], (num) => num > 2));

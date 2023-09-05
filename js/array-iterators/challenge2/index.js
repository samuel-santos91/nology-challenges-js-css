// CHALLENGE: Write own implementation for the following methods

//REDUCE
const listOfNumbers = [1, 2, 3, 4];

const sumListElements = (array, initialValue = 0) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (initialValue !== 0) {
    sum += initialValue;
  }
  return sum;
};

console.log(sumListElements(listOfNumbers, 1))

//JOIN
const elements = ["hello", "you", "person"];

const joinElements = (array, separator) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      newArray += array[i];
    } else {
      newArray += `${array[i]}${separator}`;
    }
  }
  return newArray;
};

console.log(joinElements(elements, " "));

//REVERSE
const ordered = ["fist", "second", "third"];

const reverseElements = (array) => {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

console.log(reverseElements(ordered))

//FINDINDEX
const numbers = [0, 2, 3, 7, 19];

const largerThan = (elem) => {
  if (elem > 5) {
    return true;
  } else false;
};

const whichIndex = (array, cb) => {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      return i;
    }
  }
  return -1;
};

console.log(whichIndex(numbers, largerThan))

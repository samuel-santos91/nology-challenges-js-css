// //Generating Unique Random Numbers
let arrayOfNum = [];

while (arrayOfNum.length < 15) {
  let randomNum = Math.floor(Math.random() * 16);
  if (!arrayOfNum.includes(randomNum)) {
    arrayOfNum.push(randomNum);
  }
}
console.log(arrayOfNum);

//generateNumbers function
let newArrayOfNum = [];

const generateNumbers = (n, r, isUnique = false) => {
  if (n > r || n === 0) return;

  while (newArrayOfNum.length < n) {
    let randomNum = Math.floor(Math.random() * (r + 1));
    if (!isUnique) {
      newArrayOfNum.push(randomNum);
    } else {
      if (!newArrayOfNum.includes(randomNum)) {
        newArrayOfNum.push(randomNum);
      }
    }
  }
  return newArrayOfNum;
};

console.log(generateNumbers(10, 20, true));

// const contOccurances = (array, checkThis) => {
//   const newArray = array.filter((elem) => elem === checkThis);
//   return newArray.length;
// };

// console.log(contOccurances(["car", "peter", 2, 3, "car"], "car"));

const contOccurancesObj = (array) => {
  const count = {};
  for (elem of array) {
    count[elem] = (count[elem] || 0) + 1;
  }
  return count;
};

console.log(contOccurancesObj(["car", "peter", 2, 3, "car"]))
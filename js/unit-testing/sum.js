// A function that calculates the sum of numbers
// returns the sum of numbers
// it should work for different amount of arguments - 1 or more

// no parameters sum() -> throw an error
// all parameters must be numbers -> if not throw an error sum(2, "apple", true)

// sum(2)
// sum(2, 3, 4, 5)
// sum(10, 11, 11, 11, 11, 11, 11)

export const sum = (...numbers) => {
  if (numbers.length === 0) {
    throw new Error("This function needs at least one argument");
  }

  if (!numbers.every((elem) => typeof elem === "number")) {
    throw new Error("Incorrect input type. All arguments need to be a number");
  }

  return numbers.reduce((a, b) => a + b, 0);
};

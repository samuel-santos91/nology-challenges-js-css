let userInput;

if (typeof userInput === "number") {
  const squaredNumber = userInput ** 2;
  console.log(squaredNumber);
} else if (typeof userInput === "string") {
  console.log(userInput);
} else {
  console.log("Invalid input");
}

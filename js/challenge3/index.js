// Calculating Moon Orbits

const moonOrbits = (days) => {
  // 27 days per orbit around earth
  return console.log(days / 27);
};

moonOrbits(54);
moonOrbits(365);

//Working With Circles

const circleArea = (radius) => {
  return console.log(Math.PI * radius ** 2);
};

const circlePerimeter = (radius) => {
  return console.log(2 * Math.PI * radius);
};

circleArea(10);
circlePerimeter(10);

//Years to Days & Seconds

const ageInDays = (age) => {
  return console.log(age * 365);
};

const ageInSeconds = (age) => {
  return console.log(age * 365 * 24 * 60 * 60);
};

ageInDays(32);
ageInSeconds(32);

//Return the Remainder From Two Numbers

const remainder = (num1, num2) => {
  return console.log(num1 % num2);
};

remainder(1, 3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);

//Basketball Points

const totalPoints = (twoPoint, ThreePoint) => {
  return console.log(twoPoint * 2 + ThreePoint * 3);
};

totalPoints(10, 5);
totalPoints(20, 0);
totalPoints(8, 6);

//Less Than 100?

const lessThan100 = (num1, num2) => {
  if (num1 + num2 < 100) {
    return console.log(true);
  } else {
    console.log(false);
  }
};

lessThan100(22, 15);
lessThan100(83, 34);
lessThan100(3, 77);

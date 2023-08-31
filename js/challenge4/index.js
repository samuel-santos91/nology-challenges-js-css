//Listing Hobbies
const hobbies = ["eat", "sleep", "drink"];
console.log(hobbies[0]);

const firstHobby = hobbies.shift();
console.log(firstHobby);
console.log(hobbies);

const arrayLength = hobbies.length;
console.log(arrayLength);

hobbies.push("play");
console.log(hobbies);

console.log(hobbies[2]);

//BONUS
const sentence = hobbies.join(",");
console.log(`My hobbies are: ${sentence}.`);

//Grocery List
const groceyList = ["bread", "bananas", "butter", "beetroot", "ballons"];
console.log(groceyList.join("|"));

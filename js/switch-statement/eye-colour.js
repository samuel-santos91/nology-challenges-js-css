let parent1 = "green";
let parent2 = "green";

switch (parent1) {
  case "blue":
    switch (parent2) {
      case "blue":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 99%, brown eyes is 0% and green eyes is 1%`
        );
        break;

      case "brown":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown eyes is 50% and green eyes is 0%`
        );
        break;

      case "green":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown eyes is 0% and green eyes is 50%`
        );
        break;
    }
    break;
  case "brown":
    switch (parent2) {
      case "blue":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown eyes is 50% and green eyes is 0%`
        );
        break;

      case "brown":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 6.25%, brown eyes is 75% and green eyes is 18.75%`
        );
        break;

      case "green":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown eyes is 50% and green eyes is 37.5%`
        );
        break;
    }
    break;
  case "green":
    switch (parent2) {
      case "blue":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown eyes is 0% and green eyes is 50%`
        );
        break;

      case "brown":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown eyes is 50% and green eyes is 37.5%`
        );
        break;

      case "green":
        console.log(
          `Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 25%, brown eyes is less than 1% and green eyes is 75%`
        );
        break;
    }
    break;
  default:
    console.log("Please enter the colours 'blue', 'green' or 'brown'");
}

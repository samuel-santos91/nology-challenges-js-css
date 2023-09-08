class Dog {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.walks = [];
  }

  walk(distance) {
    this.walks.push(distance);
  }

  walkAverage() {
    const sum = this.walks.reduce((a, b) => a + b);
    const numbWalks = this.walks.length;
    return `Average of ${sum / numbWalks}km per walk`;
  }

  walkSummary() {
    console.log(
      `${this.name} had ${
        this.walks.length
      } walks. A total of ${this.walks.reduce(
        (total, distance) => total + distance
      )} km`
    );
  }
}

const luis = new Dog("luis", "12", "poodle");

luis.walk(2);
luis.walk(5);
luis.walk(5);
console.log(luis.walkAverage());
luis.walkSummary();

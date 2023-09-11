import { sum } from "./sum";

describe("test cases for a function that calculates the sum of all numbers passed as arguments", () => {
  it("throws an error if there aren't any parameters", () => {
    expect(() => {
      sum();
    }).toThrow("This function needs at least one argument");
  });

  it("throws an error if one of the arguments is not a number", () => {
    expect(() => {
      sum(1, 2, "1");
    }).toThrow("Incorrect input type. All arguments need to be a number");
    expect(() => {
      sum("apple", true, 2, 4);
    }).toThrow("Incorrect input type. All arguments need to be a number");
    expect(() => {
      sum(true, false, true, true);
    }).toThrow("Incorrect input type. All arguments need to be a number");
    expect(() => {
      sum("1", "2", "3");
    }).toThrow("Incorrect input type. All arguments need to be a number");
    expect(() => {
      sum(true, false, 1, 2);
    }).toThrow("Incorrect input type. All arguments need to be a number");
  });

  it("returns the right sum of all arguments", () => {
    expect(sum(3)).toBe(3);
    expect(sum(100, 200)).toBe(300);
    expect(sum(1.1, 1.1)).toBe(2.2);
    expect(sum(-20, 30)).toBe(10);
    expect(sum(-20, -30, -40)).toBe(-90);
  });
});

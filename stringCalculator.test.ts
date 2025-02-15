const { StringCalculator } = require("./index");

test("returns 0 for an empty string", () => {
  const calc = new StringCalculator();
  expect(calc.add("")).toBe(0);
});

test("returns the number itself for a single number", () => {
  const calc = new StringCalculator();
  expect(calc.add("1")).toBe(1);
});

test("returns sum of two numbers", () => {
  const calc = new StringCalculator();
  expect(calc.add("1,2")).toBe(3);
});

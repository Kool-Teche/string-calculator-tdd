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

test("returns sum of multiple numbers", () => {
  const calc = new StringCalculator();
  expect(calc.add("1,2,3,4,5")).toBe(15);
});

test("handles new lines between numbers", () => {
  const calc = new StringCalculator();
  expect(calc.add("1\n2,3")).toBe(6);
});

test("supports custom delimiters", () => {
  const calc = new StringCalculator();
  expect(calc.add("//;\n1;2")).toBe(3);
});

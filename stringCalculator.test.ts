const { StringCalculator } = require("./index");

test("returns 0 for an empty string", () => {
  const calc = new StringCalculator();
  expect(calc.add("")).toBe(0);
});

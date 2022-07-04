import { sum, subtract } from "../calculator.js";

describe("calculator sum", () => {
  test("it should sum two positive values", () => {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });

  test("it should sum numbers with a negative value", () => {
    const result = sum(2, -2);

    expect(result).toBe(0);
  });
});

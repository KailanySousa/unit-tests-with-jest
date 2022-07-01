export function sum(a, b) {
    return a + b;
}
test("it should sum numbers with a negative value", () => {
  const result = sum(2, -2);

  expect(result).toBe(0);
});
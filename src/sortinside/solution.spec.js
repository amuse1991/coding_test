import solution from "./solution";
test("sortinside", () => {
  const input = "982987";
  const sol = solution(input);
  expect(sol).toBe("998872");
});

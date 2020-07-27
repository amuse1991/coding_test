import solution from "./solution";

test("sort number", () => {
  const input = [5, 5, 2, 3, 4, 1];
  const sol = solution(input);
  expect(sol).toEqual([1, 2, 3, 4, 5]);
});

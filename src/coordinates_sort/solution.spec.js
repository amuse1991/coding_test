import solution from "./solution";

test("coordinates sort", () => {
  const input = [5, "3 4", "1 1", "1 -1", "2 2", "3 3"];
  const sol = solution(input);
  expect(sol).toEqual(["1 -1", "1 1", "2 2", "3 3", "3 4"]);
});

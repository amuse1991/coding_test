import solution from "./solution";

test("수 찾기", () => {
  const input = ["5", [4, 1, 5, 2, 3], "5", [1, 3, 7, 9, 5]];
  const sol = solution(input);
  expect(sol).toBe("1 1 0 0 1");
});

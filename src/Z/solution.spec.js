import solution from "./solution";

test.skip("Z", () => {
  const input = "2 3 1";
  const sol = solution(input);
  expect(sol).toBe("11");
});

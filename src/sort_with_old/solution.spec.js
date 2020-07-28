import { solution } from "./solution";

test("sort_with_old", () => {
  const input = ["3", "21 Junkyu", "21 Dohyun", "20 Sunyoung"];
  const sol = solution(input);
  expect(sol).toEqual(["20 Sunyoung", "21 Junkyu", "21 Dohyun"]);
});

import { solution } from "./solution";

test.skip("make zero", () => {
  it("simple case", () => {
    const input = ["1", "3"];
    const sol = solution(input);
    expect(sol).toEqual(["1+2-3"]);
  });
});

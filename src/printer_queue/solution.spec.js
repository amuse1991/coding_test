import solution from "./solution";

test("", () => {
  it.skip("", () => {
    const input = `3
  1 0
  5
  4 2
  1 2 3 4
  6 0
  1 1 9 1 1 1`;
    expect(solution(input)).toBe("1\n2\n5");
  });
});

import solution from "./solution";

test("mock exam", () => {
  it("case 1", () => {
    const sol = solution([1, 2, 3, 4, 5]);
    expect(sol).toEqual([1]);
  });
  it("case 2", () => {
    const sol = solution([1, 3, 2, 4, 2]);
    expect(sol).toEqual([1, 2, 3]);
  });
});

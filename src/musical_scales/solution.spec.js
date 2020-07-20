import solution from "./solution";
console.log(solution);
test("musical_scales", () => {
  it("if input is ordered, return 'ascending'", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(solution(input)).toBe("ascending");
  });
  it("if input is inordered, return 'descending'", () => {
    const input = [8, 7, 6, 5, 4, 3, 2, 1];
    expect(solution(input)).toBe("descending");
  });
  it("if input is random, return 'mixed'", () => {
    const input = [5, 4, 8, 7];
    expect(solution(input)).toBe("mixed");
  });
});

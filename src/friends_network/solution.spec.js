import solution from "./solution";

test("friends network", () => {
  it("둘 다 어느 집합에도 속하지 않은 경우 새 집합 생성", () => {
    const input = ["1", "1", "Fred Barney"];
    const sol = solution(input);
    expect(sol).toBe("2");
  });
  it("둘 중 하나가 특정 집합에 속한 경우, 집합에 속하지 않은 원소를 해당 집합에 포함", () => {
    const input = ["1", "2", "Fred Barney", "Barney Betty"];
    const sol = solution(input);
    expect(sol).toBe("2 3");
  });
  it("", () => {
    const input = [
      "2",
      "3",
      "Fred Barney",
      "Barney Betty",
      "Betty Wilma",
      "3",
      "Fred Barney",
      "Betty Wilma",
      "Barney Betty"
    ];

    const sol = solution(input);
    expect(sol).toBe("2 3 4 2 2 4");
  });
});

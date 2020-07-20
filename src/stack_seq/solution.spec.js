import solution from "./solution";

test("스택을 사용해 수열 생성", () => {
  it("수열을 만들 수 있는 경우 push, pop 로그를 배열로 반환한다.", () => {
    const sol = solution(8, "4 3 6 8 7 5 2 1");
    const solStr = sol.reduce((str, solVal) => str + String(solVal), "");
    expect(solStr).toBe("++++--++-++-----");
  });
  it("수열을 만들수 없는 경우 NO를 배열의 유일한 요소로 반환한다", () => {
    const sol = solution(5, "1 2 5 3 4");
    expect(sol.length).toBe(1);
    expect(sol[0]).toBe("NO");
  });
});

import solution from "./solution";

test("3개를 선택한 합이 jackVal에 가장 가까운 값을 반환한다 ", () => {
  const givenValues = {
    jackVal: 500,
    cardVals: "93 181 245 214 315 36 185 138 216 295"
  };
  expect(solution(givenValues)).toBe(497);
});

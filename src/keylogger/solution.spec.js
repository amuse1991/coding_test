import solution from "./solution";

test("key logger", () => {
  describe("입력이 < 또는 > 일 때", () => {
    it("입력이 < 인 경우 커서를 왼쪽으로 1만큼 이동한다.", () => {});
    it("입력이 > 인 경우 커서를 오른쪽으로 1만큼 움직인다.", () => {});
    it("줄의 처음일 때, 입력이 < 이면 커서를 움직이지 않는다.", () => {});
    it("줄의 마지막일 때, 입력이 > 이면 커서를 움직이지 않는다.", () => {});
  });
  describe("입력이 일반 문자일 때", () => {
    it(
      "커서의 위치가 마지막이 아니면, 문자를 입력하고 커서를 오른쪽으로 1 이동한다."
    );
    it(
      "커서가 가리키는 곳에 이미 문자가 있으면, 그 문자를 한칸 밀고 문자를 넣는다."
    );
  });
  describe("입력이 -일 때", () => {
    it("커서 앞에 문자가 존재할 경우, 커서를 왼쪽으로 1이동하고 그 문자를 지운다", () => {});
    it("커서 앞에 문자가 존재하지 않을 경우, 아무 행동도 하지 않는다.", () => {});
  });
  it("입력 테스트", () => {
    const input = [2, "<<BP<A>>Cd-", "ThIsIsS3Cr3t"];
    expect(solution(input)).toBe("BAPC\nThIsIsS3Cr3t");
  });
});

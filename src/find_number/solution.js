/**
 * 제목 : 수 찾기
 * 난이도 : 하
 * 문제 유형 : 해시, 배열, 구현
 * 추천 풀이 시간 : 20분
 */

export default function solution(inputs) {
  const numList = inputs[1];
  const targets = inputs[3];
  const numSet = new Set(numList);
  const res = targets.reduce((result, target) => {
    result.push(numSet.has(target) ? "1" : "0");
    return result;
  }, []);
  return res.reduce((str, resItem) => str.concat(" ", resItem));
}

export default function solution(answers) {
  let answer = [];
  const scores = [0, 0, 0]; // 1번, 2번, 3번의 점수
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  let maxScore = 0;

  for (let num = 0; num < answers.length; num += 1) {
    const ans = answers[num];
    for (let pNum = 0; pNum < patterns.length; pNum += 1) {
      const pattern = patterns[pNum];
      // 정답인지 판단
      if (pattern[num % pattern.length] === ans) {
        const score = (scores[pNum] += 1);
        maxScore = score > maxScore ? score : maxScore;
      }
    }
  }

  answer = scores.reduce(
    (ansList, score, idx) =>
      score === maxScore ? [...ansList, idx + 1] : ansList,
    []
  );

  return answer;
}

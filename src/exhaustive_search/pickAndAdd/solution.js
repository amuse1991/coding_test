export default function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue; // 동일한 index는 skip
      answer.push(numbers[i] + numbers[j]);
    }
  }

  // 중복 제거 후 오름차순 정렬
  answer = [...new Set(answer)].sort((a, b) => a - b);

  return answer;
}

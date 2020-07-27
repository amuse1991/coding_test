export default function solution(input) {
  const numbers = input.split("").map(v => Number(v));

  const numCount = Array.from({ length: 9 }, v => 0);

  numbers.forEach(number => {
    numCount[number - 1] += 1;
  });

  const sorted = [];
  for (let idx = numCount.length - 1; idx >= 0; idx -= 1) {
    const count = numCount[idx];
    if (count <= 0) continue;
    const number = idx + 1;
    sorted.push(...Array.from({ length: count }, v => number));
  }

  return sorted.join("");
}

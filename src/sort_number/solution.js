export default function solution(inputs) {
  inputs = inputs.slice(1);
  const numbers = inputs.map(input => Number(input));

  const swap = (list, idxA, idxB) => {
    const tmp = list[idxA];
    list[idxA] = list[idxB];
    list[idxB] = tmp;
  };

  for (let i = 0; i < numbers.length; i += 1) {
    let minIdx = i;
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[j] < numbers[minIdx]) {
        minIdx = j;
      }
    }
    swap(numbers, i, minIdx);
  }

  return numbers;
}

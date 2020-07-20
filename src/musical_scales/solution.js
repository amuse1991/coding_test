function solution(inputs) {
  const ascOrder = [1, 2, 3, 4, 5, 6, 7, 8];
  const descOrder = Array.from(ascOrder).reverse();
  let result;

  for (const [inIdx, input] of inputs.entries()) {
    if (ascOrder[inIdx] === input) {
      result = "ascending";
    } else if (descOrder[inIdx] === input) {
      result = "descending";
    } else {
      result = "mixed";
      break;
    }
  }
  return result;
}

console.log(solution([1, 2, 3]));

export default solution;

function solution(input) {
  console.log(input);
  const inputList = input.split(" ").map(val => Number(val));
  let isAsc = false;
  let isDesc = false;
  let isMixed = false;
  for (const [inIdx, input] of inputList.entries()) {
    if (inIdx === inputList.length - 1) break;
    const nextInput = inputList[inIdx + 1];
    if (input < nextInput) {
      if (isDesc) {
        isMixed = true;
        break;
      }
      isAsc = true;
    } else {
      if (isAsc) {
        isMixed = true;
        break;
      }
      isDesc = true;
    }
  }

  if (isMixed || (isAsc && isDesc)) return "mixed";
  if (isAsc) return "ascending";
  if (isDesc) return "descending";
}

export default solution;

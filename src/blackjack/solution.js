export default function solution(input) {
  /*
  10 500
  93 181 245 214 315 36 185 138 216 295
  */
  const { jackVal, cardVals } = input;
  const cardValList = cardVals.split(" ").map(val => Number(val));

  // 경우의 수가 총 nC3 이므로 완전탐색으로 해결 가능

  let result = 0;

  cardValList.forEach((val1, idx1) => {
    cardValList.forEach((val2, idx2) => {
      if (idx1 === idx2) return;
      cardValList.forEach((val3, idx3) => {
        if (idx3 === idx1 || idx3 === idx2) return;
        const sum = val1 + val2 + val3;
        if (sum < jackVal && result < sum) {
          result = sum;
        }
      });
    });
  });

  return result;
}

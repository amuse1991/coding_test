export default function solution(inputs) {
  const caseLengths = inputs.slice(1).map(v => Number(v));
  for (const caseLength of caseLengths) {
    const sequence = Array.from({ length: caseLength });
  }
}

const getZeroExpr = (seq, op, expr) => {
  if (seq.length === 2) {
  }
  const valPlus = getZeroExpr(numA, numB, "+");
  const valMinus = getZeroExpr(numA, numB, "-");
  const valConcat = getZeroExpr(numA, numB, "c");

  if (varPlus)
    switch (op) {
      case "+":
        val = numA + numB;
        break;
      case "-":
        val = numA - numB;
        break;
      case "c":
        val = Number(`${numA}${numB}`);
        break;
      default:
        throw new Error();
    }
};

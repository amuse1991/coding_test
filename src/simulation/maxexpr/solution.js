function solution(expression) {
  let answer = 0;
  const combinations = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 0, 2],
    [1, 2, 0],
    [2, 0, 1],
    [2, 1, 0]
  ];
  const calc = (str, op) => {
    const regex =
      op === 0
        ? /(-{0,}\d{1,})-(-{0,}\d{1,})/g
        : op === 1
        ? /(-{0,}\d{1,})\+(-{0,}\d{1,})/g
        : /(-{0,}\d{1,})\*(-{0,}\d{1,})/g;
    const exprs = str.match(regex);
    if (!exprs) return str;

    return exprs.reduce((resStr, expr) => {
      return resStr.replace(expr, eval(expr));
    }, str);
  };

  for (let comb of combinations) {
    let exprCpy = `${expression}`;
    for (let op of comb) {
      exprCpy = calc(exprCpy, op);
      const testReg = /(-{0,}\d{1,})[-|+|*](-{0,}\d{1,})/g;
      if (testReg.test(exprCpy)) {
        exprCpy = calc(exprCpy, op);
      }
    }
    const value = Math.abs(exprCpy);
    if (answer < value) {
      answer = value;
    }
  }
  return answer;
}

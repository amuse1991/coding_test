function solution(n) {
  var answer = "";
  const convCardinal = (num, cardinal) => {
    let quotient = num;
    const output = [];

    while (quotient > 0) {
      const reserve = quotient % cardinal;
      if (reserve === 0) {
        output.push(4);
        quotient = Math.floor(quotient / 3 - 1);
        continue;
      }
      output.push(reserve);
      quotient = Math.floor(quotient / cardinal);
    }

    output.reverse();
    return output;
  };

  answer = convCardinal(n, 3).join("");
  return answer;
}

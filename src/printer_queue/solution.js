export default function solution(input) {
  const strCases = input.split("\n").slice(1);
  const cases = [];
  for (let idx = 0; idx < strCases.length; idx += 2) {
    const [numOfDocs, targetDocName] = strCases[idx]
      .trim()
      .split(" ")
      .map(val => Number(val));

    const docs = strCases[idx + 1]
      .split(" ")
      .map((val, idx) => ({ priority: Number(val), name: Number(idx) }));

    cases.push({
      numOfDocs,
      targetDocName,
      docs
    });
  }

  let resultStr = "";
  for (const tCase of cases) {
    const targetDoc = tCase.docs.find(doc => doc.name === tCase.targetDocName);
    const orderCount = tCase.docs.reduce((count, doc) => {
      if (doc.priority <= targetDoc.priority) {
        return count + 1;
      }
      return count;
    }, 0);
    resultStr += `${String(orderCount + 1)}\n`;
  }

  return resultStr;
}

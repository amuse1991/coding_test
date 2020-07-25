export default function solution(inputs) {
  inputs = inputs.slice(1);
  const inputCpy = Array.from(inputs);
  const cases = [];
  while (inputCpy.length > 0) {
    const numOfRel = inputCpy.shift();
    const relations = Array.from({ length: Number(numOfRel) }).reduce(
      (arr, __) => {
        const relation = inputCpy.shift();
        const [userA, userB] = relation.trim().split(" ");
        arr.push([userA, userB]);
        return arr;
      },
      []
    );
    cases.push(relations);
  }
  const outputs = [];

  cases.forEach(relations => {
    const setElemes = new Set();
    const sets = [];
    relations.forEach(relation => {
      const [userA, userB] = relation;
      const includeUsers = [...setElemes.values()].filter(
        elem => elem === userA || elem === userB
      );
      if (includeUsers.length < 1) {
        // 새 집합 생성
        sets.push(new Set([userA, userB]));
        setElemes.add(userA);
        setElemes.add(userB);
      } else if (includeUsers.length === 1) {
        // 집합에 속하지 않은 원소를 해당 집합에 포함
        const incUser = includeUsers[0];
        const notIncUser = relation.find(user => user !== incUser);
        sets.find(set => set.has(incUser)).add(notIncUser);
        setElemes.add(notIncUser);
      } else {
        // 두 집합을 결합
        const userASet = sets.find(set => set.has(userA));
        const userBSet = sets.find(set => set.has(userB));
        [...userBSet.values()].forEach(elems => {
          userASet.add(elems);
        });
      }
      const resSet = sets.find(set => set.has(userA));
      outputs.push(resSet.size);
    });
  });
  return outputs.join(" ");
}

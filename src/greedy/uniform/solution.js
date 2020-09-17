export default function solution(n, lost, reserve) {
  // lost와 reserve를 하나의 배열로 합친다.
  // 구분을 위해 lost는 음수로 처리한다.
  const students = [...lost.map((el) => -el), ...reserve].sort(
    (a, b) => Math.abs(a) - Math.abs(b)
  );
  console.log(students);

  const noUniform = students.reduce((results, current, idx) => {
    const isLost = (stud) => Math.sign(stud) < 0;
    const next = students[idx + 1];
    // 자신이 lost일 때, 다음 사람이 없거나 lost면 빌릴 수 없다.
    // + + , + -, - + 인 경우는 빌릴 수 있지만 - -인 경우 빌릴 수 없다.
    if (isLost(current)) {
      return !next || isLost(next) ? [...results, current] : results;
    }
    return results;
  }, []);

  return n - noUniform.length;
}

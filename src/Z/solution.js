export default function solution(input) {
  const [n, crdntX, crdntY] = input.split(" ").map(v => Number(v));
  const count = findCrdntZ([crdntX, crdntY], Math.pow(2, n), 0, 0, 0, false);
  return count;
}

const findCrdntZ = (crdnt, n, x, y, count) => {
  const [crdntX, crdntY] = crdnt;
  if (n === 2) {
    if (x === crdntX && y === crdntY) {
      return count;
    }
    count += 1;
    if (x === crdntX && y + 1 === crdntY) {
      return count;
    }
    count += 1;
    if (x + 1 === crdntX && y === crdntY) {
      return count;
    }
    count += 1;
    if (x + 1 === crdntX && y + 1 === crdntY) {
      return count;
    }
    count += 1;
  }

  const ltCnt = findCrdntZ(crdnt, n / 2, x, y, count);
  const lbCnt = findCrdntZ(crdnt, n / 2, x, y / 2, ltCnt);
  const rtCnt = findCrdntZ(crdnt, n / 2, x + 2 / n, y, lbCnt);
  const rbCnt = findCrdntZ(crdnt, n / 2, x + n / 2, y + n / 2, rtCnt);

  return rbCnt;
};

export function solution(files) {
  const reg = /([^0-9]{1,})([0-9]{1,5})(.{0,})/i;
  const answer = files
    .reduce((list, fileName) => {
      const [txt, head, num, tail] = reg.exec(fileName);
      return [...list, [head, num, tail]];
    }, [])
    .sort((lsA, lsB) => {
      const ahead = lsA[0].toLowerCase();
      const bhead = lsB[0].toLowerCase();
      if (ahead < bhead) return -1;
      if (ahead > bhead) return 1;

      // head 동일한 경우 number 비교
      const aNum = Number(lsA[1]);
      const bNum = Number(lsB[1]);
      return aNum - bNum;
    })
    .reduce((list, names) => [...list, names.join("")], []);

  return answer;
}

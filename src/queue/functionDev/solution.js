export function solution(progresses, speeds) {
  const answer = [];
  let progSpeds = progresses.map((prog, idx) => ({
    id: idx,
    prog,
    speed: speeds[idx]
  }));
  while (progSpeds.length) {
    const [first, ...others] = progSpeds;
    const workday = Math.ceil((100 - first.prog) / first.speed);
    progSpeds = progSpeds.map((item) => ({
      ...item,
      prog: item.prog + item.speed * workday
    }));

    let count = 0;
    let idx = 0;
    while (idx < progSpeds.length) {
      if (progSpeds[idx].prog < 100) break;
      count += 1;
      idx += 1;
    }
    progSpeds = progSpeds.slice(idx);
    answer.push(count);
  }
  return answer;
}

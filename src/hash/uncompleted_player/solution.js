export default function solution(participant, completion) {
  let answer = "";
  const createMap = (list) =>
    list.reduce((nameMap, name) => {
      if (nameMap.has(name)) {
        const count = nameMap.get(name);
        nameMap.set(name, count + 1);
      } else {
        nameMap.set(name, 1);
      }
      return nameMap;
    }, new Map());

  const ptcpMap = createMap(participant);
  const cmpMap = createMap(completion);

  for (const [ptcpName, count] of ptcpMap.entries()) {
    const cmpCount = cmpMap.get(ptcpName);
    if (!cmpCount || cmpCount !== count) {
      answer = ptcpName;
      break;
    }
  }

  return answer;
}

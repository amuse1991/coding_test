# 개요

[프로그래머스, 완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

# 나의 풀이

동명이인 처리를 위해 participant와 completion을 Map으로 만들고, 각각 참가자를 카운트했다.

```
function solution(participant, completion) {
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
```

# 좋은 풀이

```
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}
```

# 회고

- 내 코드는 불필요하게 복잡한 로직을 사용하고 있다. 좋은 풀이를 보고 느낀 것인데, 간단히 정렬 후 비교하면 해결될 문제였다. 문제를 접근할 때 가장 심플한 로직부터 고려하는 연습이 필요할 것 같다.

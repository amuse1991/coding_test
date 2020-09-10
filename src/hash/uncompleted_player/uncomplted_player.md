# 완주하지 못한 선수

출처: [프로그래머스 코딩 테스트 연습](https://programmers.co.kr/learn/challenges)

수많은 마라톤 선수들이 마라톤에 참여하였습니다. **단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.**

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- **참가자 중에는 동명이인이 있을 수 있습니다.**

# 나의 풀이

동명이인 처리를 위해 participant와 completion을 Map으로 만들고, 각각 참가자를 카운트해 비교하는 방식으로 처리했다.

| participant | completion |
| ----------- | ---------- |
| A:1         | A:1        |
| B:2         | B:1        |

위와 같은 경우 B의 카운터가 다르므로 B를 출력하도록 했다.

```
function solution(participant, completion) {
  let answer = "";

  // 이름을 key, 인원수를 value로 하는 map 생성 함수
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

  // 참가자와 완료자 count
  const ptcpMap = createMap(participant);
  const cmpMap = createMap(completion);

  // 두 map을 순회하며 참가자와 완료자를 비교
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

- 내 코드는 불필요하게 복잡한 로직을 사용하고 있다. 직관적으로 생각하면 간단히 정렬 후 비교하면 해결될 문제다.
- 문제를 접근할 때 가장 심플한 로직부터 고려하는 연습이 필요하다. 이번 문제는 동명이인이라는 조건을 혼자 복잡하게 상상한게 문제다. 간단한 것을 어렵게 생각할 필요는 없다.

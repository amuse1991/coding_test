# 모의고사

출처: [프로그래머스 코딩 테스트 연습](https://programmers.co.kr/learn/challenges)

## 문제 설명

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한 조건

- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

# 나의 풀이

수포자가 3명이기 때문에 완전 탐색으로 풀 수 있다.
최악의 경우 10000번씩 3번 반복해 3만번 반복하므로 O(n) 이다.

배열 순회는 % 연산자를 이용해 처리했다.

```
function solution(answers) {
  let answer = [];
  const scores = [0, 0, 0]; // 1번, 2번, 3번의 점수
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  let maxScore = 0;

  for (let num = 0; num < answers.length; num += 1) {
    const ans = answers[num];
    for (let pNum = 0; pNum < patterns.length; pNum += 1) {
      const pattern = patterns[pNum];
      if (pattern[num % pattern.length] === ans) {
        const score = (scores[pNum] += 1);
        maxScore = score > maxScore ? score : maxScore;
      }
    }
  }

  answer = scores.reduce(
    (ansList, score, idx) =>
      score === maxScore ? [...ansList, idx + 1] : ansList,
    []
  );

  return answer;
}
```

# 좋은 풀이

```
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}
```

# 회고

- 처음에 배열 순회 처리를 잘못해서 오류가 생겼다. list[(idx % list.length)-1] 이라고 생각했다. 놀랍게도 나는 [1,2,3,4,5] 인 경우 5번째가 5라고 생각한 것이다! 0번째부터 시작했으니까 5번째는 1이다(idx 0). 따라서 list[idx % list.length]가 맞다.

- 좋은 풀이가 어떤게 좋은 풀이인지 좀 헷갈린다. 알고리즘 문제니까 효율성을 최대한 추구하는게 맞을까? 아니면 재사용성과 확장성 등 일반적으로 프로그래밍 할 때 고민하는 것들도 고려하는게 맞을까? 물론 이건 현실이랑 다르니까 문제만 풀면 되지만... 코테 코드를 보고 인터뷰하는 경우도 있다고 하니까 괜히 마음이 쓰인다. 정의에 수포자는 3명이라고 되어있지만, 현실에서는 요구사항이 바뀔 수 있는데 수포자가 늘어나면 알고리즘 자체를 바꿔야 하는 코드라 조금 부끄럽다.

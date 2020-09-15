# K번째 수

출처: [프로그래머스 코딩 테스트 연습](https://programmers.co.kr/learn/challenges)

## 문제 설명

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한 조건

- array의 길이는 1 이상 100 이하입니다.
- array의 각 원소는 1 이상 100 이하입니다.
- commands의 길이는 1 이상 50 이하입니다.
- commands의 각 원소는 길이가 3입니다.

# 나의 풀이

요구사항을 따라 배열을 자르고, 정렬하고, k번째 수를 찾는 방법으로 구현했다.

javascript의 sort는 브라우저 엔진에 따라 구현이 다르다.
V8엔진에서는 배열 length가 10보다 작은 경우 삽입정렬, 큰 경우 퀵소트로 구현되어 있다.
따라서 별도로 정렬 함수를 구현하지 않아도 O(nlogn) 복잡도를 기대할 수 있다.

```
function solution(array, commands) {
    const answer = commands.reduce((res,cmd)=>{
        const [start,end,order] = cmd;
        const number = array.slice(start-1,end).sort((a,b)=>a-b)[order-1];
        return [...res,number]
    },[])
    return answer;
}
```

# 좋은 풀이

```
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)

        return newArray[position - 1]
    })
}
```

# 두 개 뽑아서 더하기

출처: [프로그래머스 코딩 테스트 연습](https://programmers.co.kr/learn/challenges)

## 문제 설명

정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

## 제한사항

numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.

# 나의 풀이

모든 숫자 조합을 계산하려면 배열의 각 요소에 대해 나머지 요소와의 합을 계산하면 된다.
요소 1개당 n-1번 반복하는데, 모든 요소에 대해 수행해야 하므로 복잡도는 O(n^2) 이다.
numbers의 길이가 최대 100이므로 완전탐색으로 계산할 수 있다.

마지막에는 Set으로 중복을 제거하고 sort로 정렬했다.

sort를 쓸 떄는 그냥 sort하면 안된다. sort함수는 compare function이 제공되지 않을 경우 요소를 문자로 변환한 후 유니코드 값을 비교한다. 따라서 "80" 이 "9" 보다 앞에 온다. 간단하게 a-b를 반환하는 함수를 제공하면 숫자로 오름차순 정렬할 수 있다.

(MDN Array.sort)[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort]

```
function solution(numbers) {
    let answer = [];
    for(let i=0; i < numbers.length; i++){
        for(let j=0; j<numbers.length; j++){
            if(i===j) continue; // 동일한 index는 skip
            answer.push(numbers[i]+numbers[j])
        }
    }

    // 중복 제거 후 오름차순 정렬
    answer = [...new Set(answer)].sort((a,b)=>a-b)

    return answer;
}
```

# 좋은 풀이

문제가 업로드된지 얼마 되지 않아 추천 수가 많은 풀이가 없었다.

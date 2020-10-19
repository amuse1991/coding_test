# 124 나라의 숫자

출처: [프로그래머스 코딩 테스트 연습](https://programmers.co.kr/learn/challenges)

124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

124 나라에는 자연수만 존재합니다.
124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

| 10진법 | 124 나라 | 10진법 | 124 나라 |
| ------ | -------- | ------ | -------- |
| 1      | 1        | 6      | 14       |
| 2      | 2        | 7      | 21       |
| 3      | 4        | 8      | 22       |
| 4      | 11       | 9      | 24       |
| 5      | 12       | 10     | 41       |

자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.

# 나의 풀이

3진법 변환으로 문제를 해결했다.
3진법과 다른 점은 3까지 사용할 수 있다는 점이다.
따라서 3으로 나누어 떨어질 때 4를 넣는 방식으로 처리했다.

```
function solution(n) {
    var answer = '';
    const convCardinal = (num,cardinal) => {
        let quotient = num;
        const output = [];

        while(quotient > 0){
            const reserve = quotient % cardinal;
            if(reserve === 0){
                output.push(4);
                quotient = Math.floor(quotient / 3 - 1);
                continue;
            }
            output.push(reserve);
            quotient = Math.floor(quotient/cardinal);
        }

        output.reverse();
        return output;
    }

    answer = convCardinal(n,3).join("")
    return answer;
}
```

# 좋은 풀이

```
function change124(n) {
  var answer = "";
    var array1_2_4 = new Array(4, 1, 2); //3%3 = 0, 1%3 = 1, 2%3 = 2

  while(n) {
    answer = array1_2_4[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}
```

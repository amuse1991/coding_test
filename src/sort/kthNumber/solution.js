export default function solution(array, commands) {
  const answer = commands.reduce((res, cmd) => {
    const [start, end, order] = cmd;
    const number = array.slice(start - 1, end).sort((a, b) => a - b)[order - 1];
    return [...res, number];
  }, []);
  return answer;
}

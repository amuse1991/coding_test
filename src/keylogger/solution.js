export default function solution(input) {
  const inputs = input.slice(1);
  const results = [];

  inputs.forEach(input => {
    const inputList = input.match(/(.)/gi);
    let curser = 0;
    const pwdList = inputList.reduce((pwdList, inChar) => {
      switch (inChar) {
        case "<":
          if (curser <= 0) break;
          curser -= 1;
          break;
        case ">":
          if (curser >= pwdList.length) break;
          curser += 1;
          break;
        case "-":
          if (curser - 1 < 0) break;
          curser -= 1;
          const listCopy = Array.from(pwdList);
          listCopy.splice(curser, 1);
          return listCopy;
        default:
          if (curser === pwdList.length) {
            pwdList.push(inChar);
            curser += 1;
          } else {
            const listCopy = Array.from(pwdList);
            listCopy.splice(curser, 0, inChar);
            return listCopy;
          }
      }
      return pwdList;
    }, []);
    const pwd = pwdList.reduce((pwd, li) => pwd + li, "");
    results.push(pwd);
  });
  return results.reduce(
    (resStr, pwd, idx) => `${resStr}${idx > 0 ? "\n" : ""}${pwd}`,
    ""
  );
}

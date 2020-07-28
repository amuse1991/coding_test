const solution = function(inputs) {
  inputs = inputs.slice(1);
  const ageMap = inputs.reduce((resMap, member) => {
    const [age, name] = member.split(" ");
    if (!resMap.has(age)) {
      resMap.set(age, []);
    }
    resMap.get(age).push(name);
    return resMap;
  }, new Map());

  const ageEntries = [...ageMap.entries()].sort();
  const results = ageEntries.reduce((res, item) => {
    const [age, ...members] = item;
    return [
      ...res,
      ...Array.from(...members, member => {
        return `${age} ${member}`;
      })
    ];
  }, []);
  return results;
};

const optSolution = function(inputs) {
  inputs = inputs.slice(1);
};

export { solution, optSolution };

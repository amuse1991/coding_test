const solution = inputs => {
  const crdnts = inputs.slice(1).map(input => input.split(" "));
  const compare = (crdntA, crdntB) => {
    if (crdntA[0] === crdntB[0]) {
      return crdntA[1] - crdntB[1];
    }
    return crdntA[0] - crdntB[0];
  };
  crdnts.sort(compare);
  return crdnts.map(crdnt => crdnt.join(" "));
};

export default solution;

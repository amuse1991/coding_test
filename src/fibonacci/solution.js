const fiboRecursion = num => {
  if (num <= 1) return num;
  return fiboRecursion(num - 1) + fiboRecursion(num - 2);
};

export { fiboRecursion };

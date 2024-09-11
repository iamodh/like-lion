function solution(s) {
  const numbers = s.split(" ").map((e) => parseInt(e));

  return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}

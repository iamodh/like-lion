function solution(x, y, z) {
  const sum = x + y + z;
  const l = Math.max(x, y, z);

  return sum - l >= l ? "Yes" : "No";
}

console.log(solution(13, 33, 17));

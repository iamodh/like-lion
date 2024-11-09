function solution(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) ans++;
      if (sum > n) break;
    }
  }
  return ans;
}

console.log(solution(15));

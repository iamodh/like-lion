function solution(progresses, speeds) {
  const days = [];

  // 남은 일을 계산해 days queue에 넣음
  for (let i = 0; i < progresses.length; i++) {
    const day = Math.ceil((100 - progresses[i]) / speeds[i]);
    days.push(day);
  }

  console.log(days);

  const ans = [];

  // front를 먼저 뺀 후 days[0]과 비교, count
  while (days.length > 0) {
    const front = days.shift();
    let count = 1;
    // 3 > undefined => false
    while (days.length > 0 && front >= days[0]) {
      days.shift();
      count++;

      ans.push(count);
    }
    return ans;
  }
}

solution([93, 30, 55], [3, 30, 15]);

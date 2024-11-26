function solution(prices) {
  const queue = [...prices];

  const ans = [];
  while (queue.length > 0) {
    const front = queue.shift();

    let count = 0;

    for (let i = 0; i < queue.length; i++) {
      count++;
      if (front > queue[i]) break;
    }
    ans.push(count);
  }

  return ans;
}

function solution(prices) {
  const n = prices.length;
  const ans = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    // 스택이 비어있지 않고 현재 가격이 스택 top의 가격보다 작을 때
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const j = stack.pop();
      ans[j] = i - j;
    }
    stack.push(i);
  }

  // 스택에 남은 인덱스들 처리
  while (stack.length > 0) {
    const j = stack.pop();
    ans[j] = n - 1 - j;
  }

  return ans;
}

console.log(solution([1, 2, 3, 2, 3]));

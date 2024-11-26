function solution(priorities, location) {
  const queue = [];
  priorities.forEach((priority, index) => {
    queue.push({ index, priority });
  });

  let count = 0;
  while (queue.length > 0) {
    let front = queue[0];

    while (queue.some((item) => item.priority > front.priority)) {
      queue.push(front);
      queue.shift();
      front = queue[0];
    }

    count++;
    result = queue.shift();
    if (result.index === location) break;
  }

  return count;
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));

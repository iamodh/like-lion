function solution(citations) {
  const max = Math.max(...citations);

  for (let i = 0; i <= max; i++) {
    let down = 0;
    let up = 0;
    for (let j = 0; j < citations.length; j++) {
      if (citations[j] < i) down++;
      else if (citations[j] > i) up++;
      else {
        down++;
        up++;
      }
    }
    if (down === up) return down;
  }
  return -1;
}

console.log(solution([3, 0, 6, 1, 5]));

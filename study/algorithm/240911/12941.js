function solution(A, B) {
  let i = A.length;
  let sum = 0;
  while (i--) {
    let minA = Math.min(...A);
    let maxB = Math.max(...B);

    A.splice(A.indexOf(minA), 1);
    B.splice(B.indexOf(maxB), 1);

    sum += minA * maxB;
  }

  return sum;
}

console.log(solution([1, 4, 2], [5, 4, 4]));

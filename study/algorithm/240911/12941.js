function solution(A, B) {
  let i = A.length;
  let sum = 0;
  while (i--) {
    let minA = Math.min(...A);
    let minB = Math.min(...B);

    A.splice(A.indexOf(minA), 1);
    B.splice(B.indexOf(minB), 1);

    console.log(minA, minB, A, B);
    sum += minA * minB;
  }

  return sum;
}

console.log(solution([1, 4, 2], [5, 4, 4]));

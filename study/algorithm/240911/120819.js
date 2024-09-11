function solution(money) {
  var answer = [];

  let cups = parseInt(money / 5500);
  let change = money % 5500;

  answer.push(cups, change);
  return answer;
}

console.log(solution(15000));

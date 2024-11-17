function solution(s) {
  // 1. 열린 괄호가 나오면 스택에 push
  // 2. 닫힌 괄호가 나올 때:
  // a. 스택이 비어있으면 false (짝이 맞지 않음)
  // b. 스택이 비어있지 않으면 pop (짝을 맞춤)

  // 마지막에 스택이 비어있어야 함 (모든 괄호가 짝지어짐)

  const stack = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ")") {
      stack.push(")");
    } else if (s[i] === "(") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  }
  return false;
}

console.log(solution("()()"));

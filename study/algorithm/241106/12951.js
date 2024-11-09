function solution(s) {
  let arr = s.toLowerCase().split(" ");

  arr = arr.map((el) =>
    el.length !== 0 ? el[0].toUpperCase() + el.slice(1) : ""
  );
  const result = arr.join(" ");
  return result;
}

console.log(solution("for the last  week"));

function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word === "" ? "" : word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(solution("3people  unFollowed me"));

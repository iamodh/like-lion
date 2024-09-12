function isUpperCase(c) {
  const regex = /^[A-Z]+$/;
  return regex.test(c);
}

function isLowerCase(c) {
  const regex = /^[a-z]+$/;
  return regex.test(c);
}

function replaceAt(str, index, c) {
  //   console.log(`replacing ${str} ${index} to ${c}`);
  const s = str.split("");
  s[index] = c;
  return s.join("");
}

function solution(s) {
  const answer = [];
  const words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (isLowerCase(words[i][0])) {
      words[i] = replaceAt(words[i], 0, words[i][0].toUpperCase());
    }
    answer.push(words[i]);
  }
  return answer.join(" ");
}

console.log(solution("3people unFollowed me"));

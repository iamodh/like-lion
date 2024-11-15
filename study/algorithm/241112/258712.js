function solution(friends, gifts) {
  const give = new Map();
  const receive = new Map();

  // map 초기화
  for (let friend of friends) {
    give.set(friend, 0);
    receive.set(friend, 0);
  }

  for (let gift of gifts) {
    [from, to] = gift.split(" ");
    give.set(from, give.get(from) + 1);
    receive.set(to, receive.get(to) + 1);
  }

  console.log(give);
  console.log(receive);
}

solution(
  ["muzi", "ryan", "frodo", "neo"],
  [
    "muzi frodo",
    "muzi frodo",
    "ryan muzi",
    "ryan muzi",
    "ryan muzi",
    "frodo muzi",
    "frodo ryan",
    "neo muzi",
  ]
);

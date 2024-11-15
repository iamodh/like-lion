function solution(friends, gifts) {
  // 친구들 이름과 index 저장
  const friendsMap = new Map();
  friends.forEach((friend, index) => {
    friendsMap.set(friend, index);
  });

  // console.log(friendsMap);
  const giftTable = Array.from(Array(friends.length), () =>
    Array(friends.length).fill(0)
  );

  gifts.forEach((gift) => {
    [from, to] = gift.split(" ");
    giftTable[friendsMap.get(from)][friendsMap.get(to)] += 1;
  });

  console.log(giftTable);

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

  // console.log(give);
  // console.log(receive);

  const score = [];
  for (let i = 0; i < friends.length; i++) {
    score.push(give.get(friends[i]) - receive.get(friends[i]));
  }
  // console.log(score);

  const ans = Array(friends.length).fill(0);
  for (let i = 0; i < friends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      // 테이블의 절반만 계산
      if (i < j) {
        // 선물을 주고받지 않았거나 주고받은 개수가 같을 때
        if (giftTable[i][j] === giftTable[j][i]) {
          // console.log(`case 1. ${i} ${j} same`);
          if (
            score[friendsMap.get(friends[i])] ===
            score[friendsMap.get(friends[j])]
          ) {
            continue;
          }
          // score이 높은 친구가 선물 획득
          else if (
            score[friendsMap.get(friends[i])] >
            score[friendsMap.get(friends[j])]
          ) {
            ans[i]++;
          } else {
            ans[j]++;
          }
        }
        // i가 더 많은 선물을 주었을 때
        else if (giftTable[i][j] > giftTable[j][i]) {
          // console.log(`case 2. ${i} > ${j} => ${i}`);

          ans[i]++;
        } else {
          // console.log(`case 3. ${i} < ${j} => ${j}`);

          ans[j]++;
        }
      }
    }
  }

  // console.log(ans);

  return Math.max(...ans);
}

console.log(
  solution(["a", "b", "c"], ["a b", "b a", "c a", "a c", "a c", "c a"])
);

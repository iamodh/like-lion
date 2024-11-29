function solution(id_list, report, k) {
  const userMap = new Map(); // {유저아이디, 처리횟수}
  const listMap = new Map(); // {유저아이디, [신고대상1, 2]}
  const countMap = new Map(); // {유저아이디, 신고횟수}

  // 유저 초기화
  id_list.forEach((id) => {
    userMap.set(id, 0);
  });

  report.forEach((r) => {
    const [from, to] = r.split(" ");

    // listMap에 from이 있으면 배열에 추가, 없으면 새로운 배열
    // 신고 대상에 이미 to가 있으면 그대로
    listMap.set(
      from,
      listMap.get(from)
        ? listMap.get(from).includes(to)
          ? listMap.get(from)
          : [...listMap.get(from), to]
        : [to]
    );
  });

  for (let list of listMap) {
    list[1].forEach((l) => {
      countMap.set(l, countMap.get(l) ? countMap.get(l) + 1 : 1);
    });
  }

  // console.log(listMap);
  // console.log(countMap);

  for (let count of countMap) {
    if (count[1] >= k) {
      for (let list of listMap) {
        if (list[1].includes(count[0])) {
          userMap.set(list[0], userMap.get(list[0]) + 1);
        }
      }
    }
  }

  const ans = [];
  for (let user of userMap) {
    ans.push(user[1]);
  }
  console.log(ans);
  return ans;
}

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);

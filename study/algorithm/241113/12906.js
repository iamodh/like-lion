function solution(arr) {
  const ans = [];
  arr.forEach((el, i) => {
    // 처음, ans의 top이 el과 다를 때만 삽입
    if (i === 0 || ans[ans.length - 1] !== el) {
      ans.push(el);
    }
  });

  // console.log(ans);
  return ans;
}

solution([1, 1, 3, 3, 0, 1, 1]);

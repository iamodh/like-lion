// 만약 모자 2종류, 상의 2종류면 (모자1, 모자2, 모자 안쓰기)*(상의1, 상의2, 상의 안입기)=9인데 (모자 안쓰기,상의 안입기) 1개 빼면 9-1=8이 되는것 같습니다.
function solution(clothes) {
  const map = new Map();
  for (let cloth of clothes) {
    map.set(cloth[1], map.get(cloth[1]) ? map.get(cloth[1]) + 1 : 1);
  }
  let ans = 1;

  for (let m of map) {
    ans *= m[1] + 1;
  }

  return clothes.length === 0 ? 0 : ans - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);

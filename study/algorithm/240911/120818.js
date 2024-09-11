function solution(price) {
  let rate = 0;
  if (price >= 500000) {
    rate = 0.2;
  } else if (price >= 300000) {
    rate = 0.1;
  } else if (price >= 100000) {
    rate = 0.05;
  }

  console.log(rate);
  return Math.trunc(price - price * rate);
}

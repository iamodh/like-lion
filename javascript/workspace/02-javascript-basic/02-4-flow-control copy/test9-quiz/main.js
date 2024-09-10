"use strict";

const primeTest = () => {
  let no = prompt("2 이상의 숫자를 입력하세요");
  let message = "";
  let primes = [];

  // 잘못된 입력
  if (no === null || no <= 2) {
    document.querySelector("#result").innerHTML = "2 이상의 숫자를 입력하세요";
  } else {
    for (let i = 2; i <= no; i++) {
      let isPrime = true;

      for (let j = 2; j < i; j++) {
        // i가 소수가 아닌 경우
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) primes.push(i);
    }
    document.querySelector("#result").innerHTML =
      `입력하신 ${no}까지 소수는 ` +
      (primes.length !== 0 ? primes.join(", ") + " 입니다" : "없습니다.");
  }
};

"uses= strict";

// function sayHello() {
//   console.timeEnd();
//   console.log("Hello");
// }

// console.time(); // timeEnd에서 걸린 시간 출력
// setTimeout(sayHello, 1000);

// function sayHello2(arg1, arg2, arg3) {
//   console.log(`Hello ${arg1}, ${arg2}, ${arg3}`);
// }

// setTimeout(sayHello2, 1000, "홍길동", 10, true);

// function sayHello3() {
//   console.log("Hello3");
// }

// let id = setTimeout(sayHello3, 1000);
// clearTimeout(id);

// function fun1(name) {
//   console.log(`fun1, ${name}`);
// }

// let id = setInterval(fun1, 1000, "홍길동");

// setTimeout(() => {
//   clearInterval(id);
// }, 3000);

/* 0.5초 걸리는 업무를 1초마다 반복 호출 */
function sleep(sec) {
  return new Promise((resolve) => setTimeout(resolve, sec));
}
let beforeTime = performance.now();

// let sayHello = async () => {
//   let nowTime = performance.now();
//   console.log(nowTime - beforeTime);
//   beforeTime = nowTime;
//   await sleep(500);
// };

// let id = setInterval(sayHello, 1000);
// setTimeout(() => clearInterval(id), 3000);

/* 0.5초 걸리는 업무를 진행한 후에 1초 후 다시 업무 진행 */
let sayHello = async () => {
  let nowTime = performance.now();
  console.log(nowTime - beforeTime);
  beforeTime = nowTime;
  await sleep(500);
  setTimeout(sayHello, 1000);
};

setTimeout(sayHello, 1000);

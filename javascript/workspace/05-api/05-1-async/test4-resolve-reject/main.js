/* try...catch */
/* 에러 발생시에도 정상적으로 프로그램을 실행한다. */
try {
  console.log("1");
  throw new Error("my error");
  console.log("1-1");
} catch (e) {
  console.log("2");
}
console.log("3");

/* 비동기 실행 후 결과 전달이 필요 없는 경우 */
// function myFun1() {
//   return new Promise(() => {
//     let interval = setInterval(() => {
//       console.log("in promise");
//     }, 1000);
//     setTimeout(() => {
//       clearInterval(interval);
//     }, 3000);
//   });
// }

// console.log("step1");
// myFun1();
// console.log("step2");

/* 비동기 실행 후 결과 전달이 필요한 경우 */

function myFun2(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 0) resolve("success");
      else reject("error");
    }, 1000);
  });
}

myFun2(10).then(
  (result) => console.log(result),
  (error) => console.log(error)
);

myFun2(0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("final");
  });

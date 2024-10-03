/* 동기 실행 */
// function myFun() {
//   console.log("done...");
//   return 10;
// }

// console.log("step 1");
// let result = myFun();
// console.log("step 2" + result);

/* 비동기 실행 */
function myFun() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
  });
}

console.log("step 1");
let promise = myFun();
promise.then((result) => {
  console.log(`result : ${result}`);
});
console.log("step 2");

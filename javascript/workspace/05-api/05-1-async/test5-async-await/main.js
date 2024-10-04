/* test1 asnyc로 함수 선언 */
// async function myFun1() {
//   setTimeout(() => {
//     console.log("myFun1 call..");
//   }, 2000);
// }

// let myFun2 = async () => {
//   setTimeout(() => {
//     console.log("myFun2 call");
//   }, 1000);
// };

// console.log("setp1");
// myFun1();
// console.log("setp2");
// myFun2();
// console.log("setp3");

/* test2. promise vs async */
// function myFun3() {
//   return new Promise((resolve, reject) => {
//     resolve(1);
//   });
// }

// myFun3().then((value) => console.log(value));

// async function myFun4() {
//   return 2;
// }

// myFun4().then((value) => console.log(value));

/* test3 promise 데이터 반복 실행 */
// function getData(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${id} data`);
//     }, 1000);
//   });
// }

// function myFun5() {
//   getData(1)
//     .then((value) => {
//       console.log(value);
//       return getData(2);
//     })
//     .then((value) => {
//       console.log(value);
//       return getData(3);
//     })
//     .then((value) => {
//       console.log(value);
//     });
// }

// myFun5();

// async function myFun6() {
//   console.log("step1");
//   console.log(await getData(1));
//   console.log(await getData(2));
//   console.log(await getData(3));
//   console.log("step2");
// }

/* test4 비동기적으로 여러 함수 실행 */
async function funA() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return "funA data";
}

async function funB() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  return "funB data";
}

async function myFun7() {
  console.time();
  let aData = await funA();
  console.log(aData);
  let bData = await funB();
  console.log(bData);
  console.timeEnd();
}

// myFun7();

/* 병렬 처리 1 */
async function myFun8() {
  console.time();
  let aData = funA();
  let bData = funB();
  console.log(await aData); // 2초
  console.log(await bData); // 이미 완료되었음
  console.timeEnd();
}

// myFun8();

/* 병렬 처리 2 */
async function myFun9() {
  console.time();
  Promise.all([funA(), funB()]).then((value) => {
    console.log(value);
    console.timeEnd();
  });
}

myFun9();

// global context
let x = 10;

// one context
// function oneFun() {
//   let y = 20;
//   console.log(x, y);
// }

// // two context
// function twoFun() {
//   let z = 30;
//   console.log(x, z);
// }

// console.log(x);

// oneFun(); // 10 20
// twoFun(); // 10 30

// console.log(x);

// function outerFun() {
//   let y = 20;
//   function innerFun() {
//     let z = 30;
//     console.log(x, y, z);
//   }
//   innerFun();
// }

function outerFun() {
  let y = 20;
  function innerFun() {
    let z = 30;
    console.log(x, y, z);
  }
  return innerFun();
}

let resultFun = outerFun();
resultFun();

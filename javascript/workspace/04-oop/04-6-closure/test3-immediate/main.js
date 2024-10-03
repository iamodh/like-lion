function myFun(name) {
  console.log("myFun call");
}

myFun("홍길동");
myFun("김길동");

// 즉시실행함수
(function (name) {
  console.log("Hello");
})();

(function () {
  let data = 10;
  function fun1() {}
})();

// data = 20;
// func();

// let count = 0;
// function increment() {
//   count++;
// }
// function decrement() {
//   count--;
// }

// count = 100;
// increment();
// console.log(count);

const counter = (function () {
  let count = 0;

  // count는 직접 이용이 불가능 하지만 클로저에 의해 유지된다.
  return function (argFun) {
    count = argFun(count);
    return count;
  };
})();

let increment = (no) => ++no;
let decrement = (no) => --no;

console.log(counter(increment));
console.log(counter(decrement));
console.log(counter(increment));

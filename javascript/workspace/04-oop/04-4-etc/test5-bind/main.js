"use strict";

let obj1 = {
  name: "홍길동",
};

let sayHello = function () {
  console.log(`Hello, ${this.name}`);
};

// sayHello();

// 함수를 obj 객체 안에 선언된 것 처럼 바인딩
let newFun = sayHello.bind(obj1);
newFun();

let sayHello1 = function (arg1, arg2) {
  console.log(`Hello, ${this.name}, ${arg1}, ${arg2}`);
};

sayHello1.call(obj1, 10, 20);
sayHello1.apply(obj1, [10, 20]);

let myArray = {
  0: "orange",
  1: "yellow",
  2: "green",
  length: 3,
  push: function (e) {
    this[this.length] = e;
    length++;
  },
  pop: function (e) {
    let last = this[this.length - 1];
    this.length--;
    delete this[this.length];
    return last;
  },
  shift: function (e) {
    let first = this[0];
    for (let i = 0; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    this.length--;
    delete this[this.length];
    return first;
  },
};

myArray.push("black");
myArray.push("white");
console.log(myArray.shift());
console.log(myArray.pop());
console.log(myArray);

let myArray2 = {
  0: "orange",
  1: "yellow",
  2: "green",
  length: 3,
  push: function (e) {
    Array.prototype.push.call(this, e);
  },
  pop: function () {
    return Array.prototype.pop.call(this);
  },
  shift: function (e) {
    return Array.prototype.shift.call(this);
  },
};

myArray2.push("black");
myArray2.push("white");
console.log(myArray2.shift());
console.log(myArray2.pop());
console.log(myArray2);

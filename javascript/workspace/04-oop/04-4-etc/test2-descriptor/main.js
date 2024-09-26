"use strict";

let obj = {
  name: "홍길동",
  age: 10,
  address: "seoul",
};

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

// 값 변경
Object.defineProperty(obj, "age", { writable: false });

// error
// obj.age = 20;

// 열거
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// obj의 entry 개수만큼 반복
for (let property in obj) {
  console.log(property);
}

Object.defineProperty(obj, "age", { enumerable: false });
// age가 열거형에서 빠진다.
console.log(Object.entries(obj));

// Descriptor
Object.defineProperty(obj, "age", { writable: true });
obj.age = 20;
console.log(obj);
Object.defineProperty(obj, "age", { writable: false });
Object.defineProperty(obj, "age", { configurable: false });

// error
// Object.defineProperty(obj, "age", { writable: true })

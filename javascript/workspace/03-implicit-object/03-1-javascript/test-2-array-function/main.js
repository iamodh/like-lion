"use strict";

let array1 = [10, 20];
let array2 = [30, 40];

// 두 배열 합쳐 새로운 배열 만들기
let array3 = array1.concat(array2);
console.log(array3);
console.log(array1 === array3);

// 배열의 데이터 결합
let result1 = array3.join("a");
console.log(result1);

// 배열에 데이터 추가
array3.push(100);
array3.unshift(200);
console.log(array3);

// 배열의 데이터 삭제
array3.pop();
array3.shift();
console.log(array3);

// splice
let array = [10, 20, 30, 40];
// 중간에 삽입
array.splice(2, 0, "hello");
console.log(array); // 10, 20, "hello", 30, 40

// 삭제 후 삽입
array.splice(2, 2, 100, 200);
console.log(array); // 10, 20, 100, 200, 40

// slcie
// 데이터 획득
// 매개변수는 인덱스가 아닌 데이터의 위치
let result2 = array.slice(1, 4);
console.log(result2); // 20, 100, 200

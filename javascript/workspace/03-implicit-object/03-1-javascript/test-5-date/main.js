"use strict";

let date1 = new Date();
console.log(date1.toString());
console.log(date1.toLocaleString());

let eventStartDate = new Date("2024-09-01T00:00:00");
let eventEndDate = new Date("2024-09-30T23:59:59");

let regDate = new Date("2024-09-19T14:00:00");

if (regDate.getTime() < eventStartDate.getTime()) {
  console.log("예약하신 시간은 이벤트 시작 전입니다.");
} else if (regDate.getTime() > eventEndDate.getTime()) {
  console.log("예약하신 시간은 이벤트 종료 후입니다.");
} else {
  console.log(`${regDate.toLocaleString()}로 예약이 완료되었습니다.`);
}

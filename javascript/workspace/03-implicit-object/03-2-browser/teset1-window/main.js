"use strict";

console.log(window.innerWidth, window.innerHeight);
console.log(outerWidth, outerHeight);
console.log(screenLeft, screenTop);

window.addEventListener("scroll", () => {
  console.log(scrollX, scrollY);
});

function myOpen1() {
  childWindow = window.open("http://www.daum.net");
}

function myOpen2() {
  window.open("http://www.daum.net", "_self");
}

let childWindow;

function myOpen3() {
  childWindow = window.open(
    "http://www.naver.com",
    "_blank",
    "left=100,top=100,width=300,height=400"
  );
  if (childWindow === null) {
    alert("팝업이 차단되었습니다. 해제해주세요.");
  }

  console.dir(childWindow);
}

function myClose() {
  console.dir(childWindow);
  childWindow.close();
}
function myScroll() {
  window.scrollBy(100, 100);
}

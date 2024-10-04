"use strict";
const numNode = document.getElementById("num");
const resultNode = document.getElementById("result");

function sum() {
  // 서버 요청을 비동기로
  // 결과 획득까지 대기 상태가 되지 않게
  // 서버 응답에 의해 화면이 새로고침되지 않게 하기 위해
  // ajax를 사용

  // xhr 생성
  let xhr = new XMLHttpRequest();
  // 요청 정보 설정
  xhr.open("get", `http://localhost:3000/sum/${numNode.value}`, true);
  // 요청
  xhr.send();
  // 결과를 받기 위한 콜백 함수 등록
  xhr.onload = function () {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      resultNode.innerHTML = data.result;
    }
  };
}

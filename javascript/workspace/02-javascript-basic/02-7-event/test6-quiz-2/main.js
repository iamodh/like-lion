"use strict";

/* DOM 노드 획득 */
let formNode = document.getElementById("form");
let buttonNode = document.getElementById("button");
let resultNode = document.getElementById("result");

let idNode = document.getElementById("id");
let passwordNode = document.getElementById("password");
let messageIDNode = document.getElementById("message-id");
let messagePasswordNode = document.getElementById("message-password");

/* 정규 표현식 함수 */
const isValidID = (id) => {
  // 최소 1글자 이상을 의미하는 정규 표현식
  const regex = /.+/;

  return regex.test(id);
};

const isValidPassword = (password) => {
  // 영문자와 숫자가 반드시 하나 이상 포함되어 있으며, 문자열의 길이가 6글자 이상 16글자 이하인 문자열
  const regex = /^(?=.*[A-Za-z])(?=.*[0-9]).{6,16}$/;

  return regex.test(password);
};

/* 유효성 검사 */
idNode.addEventListener("blur", (e) => {
  let value = e.target.value;
  if (!isValidID(value)) {
    messageIDNode.innerHTML = "아이디는 필수 입력입니다.";
  } else {
    messageIDNode.innerHTML = "";
  }
});

passwordNode.addEventListener("blur", (e) => {
  let value = e.target.value;
  if (!isValidPassword(value)) {
    messagePasswordNode.innerHTML =
      "패스워드는 영문자 숫자 조합 6자 이상이어야 합니다.";
  } else {
    messagePasswordNode.innerHTML = "";
  }
});

/* 결과 출력 */
const printResult = (msg) => {
  resultNode.innerHTML = msg;
};

formNode.addEventListener("submit", (e) => {
  let idValue = idNode.value;
  let passwordValue = passwordNode.value;
  e.preventDefault();
  let msg =
    isValidID(idValue) && isValidPassword(passwordValue)
      ? `${idValue} ${passwordValue}로 로그인을 시도합니다.`
      : "아이디와 비밀번호를 확인해주세요.";
  printResult(msg);
});

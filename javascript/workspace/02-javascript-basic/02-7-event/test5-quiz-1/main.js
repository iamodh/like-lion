"use strict";

let result = document.getElementById("result");
let form = document.getElementById("form");

function printResult(msg) {
  result.innerHTML = msg;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let phone = document.getElementById("phone").value;
  let job = document.getElementById("job").value;

  let msg = `이름: ${username}<br/> 전화번호: ${phone}<br/>직업: ${job}`;
  printResult(msg);
});

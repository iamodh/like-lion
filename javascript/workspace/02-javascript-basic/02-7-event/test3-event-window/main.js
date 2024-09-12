"use strict";

let result = document.getElementById("result");
let form = document.getElementById("form");

function printResult(msg) {
  result.innerHTML = msg;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  printResult("submit event");
});
form.addEventListener("reset", () => {
  printResult("reset event");
});

let input = document.getElementById("input1");
let select = document.getElementById("select1");

input.addEventListener("focus", (e) => {
  e.target.style.boxShadow = "inset 0 0 8px pink";
});

input.addEventListener("blur", (e) => {
  e.target.style.boxShadow = "";
  printResult(`input data: ${e.target.value}`);
});

select.addEventListener("focus", (e) => {
  e.target.style.boxShadow = "inset 0 0 8px yellow  ";
});

select.addEventListener("blur", (e) => {
  e.target.style.boxShadow = "";
});

select.addEventListener("change", (e) => {
  printResult(`input change: ${e.target.value}`);
});

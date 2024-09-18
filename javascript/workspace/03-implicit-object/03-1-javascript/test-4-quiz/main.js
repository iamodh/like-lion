"use strict";

let words = [];

/* 배열을 화면에 출력하는 함수 */
function printWords(words) {
  let resultNode = document.getElementById("result");

  let result = words
    .map((word) => `<li>${word}</li>`)
    .join()
    .replaceAll(",", "");

  resultNode.innerHTML = result;
}

/* 인풋 값을 초기화하는 함수 */
function resetInput() {
  let inputNode = document.getElementById("input");
  inputNode.value = "";
}

/* Buttons */
/* 노드 획득 */
let addBtnNode = document.getElementById("add");
let mapBtnNode = document.getElementById("map");
let filterBtnNode = document.getElementById("filter");
let sortBtnNode = document.getElementById("sort");

/* Add */
addBtnNode.addEventListener("click", () => {
  let inputNode = document.getElementById("input");
  words.unshift(inputNode.value);

  printWords(words);
  resetInput();
});

/* Map */
mapBtnNode.addEventListener("click", () => {
  words = words.map((word) => word.toUpperCase());

  printWords(words);
});

/* Filter */
filterBtnNode.addEventListener("click", () => {
  words = words.filter((word) => word.length > 5);

  printWords(words);
});

/* Sort */
sortBtnNode.addEventListener("click", () => {
  words = words.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  printWords(words);
});

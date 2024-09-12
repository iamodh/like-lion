"use strict";

let resultNode;

function printResult(msg) {
  resultNode.innerHTML = msg;
}

addEventListener("load", () => {
  resultNode = document.getElementById("result");
  printResult("load event");
});

addEventListener("resize", () => {
  resultNode = document.getElementById("result");
  printResult(`resize, width: ${innerWidth}, height: ${innerHeight}`);
});

addEventListener("copy", (e) => {
  let thisURL = document.URL;
  e.preventDefault();
  e.clipboardData.setData(
    "text/plain",
    `${document.getSelection()} - 출처: ${thisURL}`
  );
});

addEventListener("paste", () => {
  printResult("paste");
});

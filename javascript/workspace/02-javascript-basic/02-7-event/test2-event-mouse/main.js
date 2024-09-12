"use strict";

window.addEventListener("load", () => {
  // click, dblclick, down, up
  let button = document.getElementById("button");
  button.addEventListener("click", () => {
    console.log("mouse clicked");
  });
  button.addEventListener("dblclick", () => {
    console.log("mouse double clicked");
  });
  button.addEventListener("mousedown", () => {
    console.log("mouse down");
  });
  button.addEventListener("mouseup", () => {
    console.log("mouse up");
  });

  // mouse move
  let area = document.getElementById("area");
  let result = document.getElementById("result");

  area.addEventListener("mousemove", (e) => {
    result.innerHTML = `offset(${e.offsetX}, ${e.offsetY}) page(${e.pageX}, ${e.pageY})`;
  });

  // enter, out
  let outer = document.getElementById("outer");
  let inner = document.getElementById("inner");

  outer.addEventListener("mouseenter", () => {
    console.log("outer mouse entered");
  });
  inner.addEventListener("mouseenter", () => {
    console.log("inner mouse entered");
  });
  outer.addEventListener("mouseout", () => {
    console.log("outer mouse out");
  });
  // 버블링 발생 (outer의 mouseout도 동작)
  inner.addEventListener("mouseout", () => {
    console.log("inner mouse out");
  });
});

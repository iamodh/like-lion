"use strict";

// 노드 획득
let todoListNode = document.getElementById("todo-list");
let btnNode = document.getElementById("btn");

// todo를 화면에 출력하는 함수
function addTodo(text) {
  let newList = document.createElement("li");
  newList.textContent = text;

  // 클릭 시 제거 이벤트
  newList.style.cursor = "pointer ";
  newList.addEventListener("click", (e) => {
    todoListNode.removeChild(e.target);
  });

  // firstChild 앞에 추가
  todoListNode.insertBefore(newList, todoListNode.childNodes[0]);
}

// 버튼 클릭 이벤트
btnNode.addEventListener("click", () => {
  let inputNode = document.getElementById("input");
  addTodo(inputNode.value);
  inputNode.value = "";
});

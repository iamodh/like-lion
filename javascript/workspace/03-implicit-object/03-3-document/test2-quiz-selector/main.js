const joinFormNode = document.getElementById("joinForm");
const resultNode = document.getElementById("result");

// 하나의 노드의 값을 result에 더하는 함수
const printOne = (categoty, node) => {
  resultNode.innerHTML += `${categoty} : ${node.value}<br />`;
};

// 여러 노드의 값을 result에 더하는 함수
const printMany = (categoty, nodes) => {
  let values = "";
  nodes.forEach((e) => (values += e.value + " "));
  resultNode.innerHTML += `${categoty} : ${values}<br />`;
};

// 폼 제출 이벤트
joinFormNode.addEventListener("submit", (e) => {
  e.preventDefault();
  resultNode.innerHTML = "";

  const nameNode = document.getElementById("name");
  const hobbyNode = document.querySelectorAll(".hobby input:checked");
  const genderNode = document.querySelector(".gender input:checked");

  // 유효성 검사
  if (
    nameNode.value.trim().length === 0 ||
    hobbyNode === null ||
    genderNode === null
  ) {
    alert("모두 입력해주세요.");
  } else {
    // 화면 출력
    printOne("이름", nameNode);
    printMany("취미", hobbyNode);
    printOne("성별", genderNode);
  }
});

// 폼 리셋 이벤트
joinFormNode.addEventListener("reset", () => {
  resultNode.innerHTML = "";
});

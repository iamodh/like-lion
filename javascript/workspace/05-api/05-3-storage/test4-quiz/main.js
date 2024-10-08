const formNode = document.getElementById("loginForm");
const resultNode = document.getElementById("result");

window.addEventListener("load", () => {
  if (localStorage.getItem("id")) {
    formNode.setAttribute("class", "hide");
    resultNode.innerHTML = `${localStorage.getItem(
      "id"
    )}으로 로그인되었습니다. <button onclick="logout()">logout</button>`;
  } else {
    formNode.setAttribute("class", "");
  }
});

formNode.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!localStorage.getItem("id")) {
    const id = document.getElementById("id").value;
    const pw = document.getElementById("pw").value;

    if (id.trim().length === 0 || pw.trim().length === 0) {
      alert("id 또는 password를 입력해주세요.");
    } else if (id !== pw) {
      alert("id 또는 password를 확인해주세요.");
    } else if (id === pw) {
      localStorage.setItem("id", id);
      localStorage.setItem("pw", pw);

      formNode.setAttribute("class", "hide");
      resultNode.setAttribute("class", "");
      resultNode.innerHTML = `${localStorage.getItem(
        "id"
      )}으로 로그인되었습니다. <button onclick="logout()">logout</button>`;
    }
  }
});

function logout() {
  localStorage.removeItem("id");
  localStorage.removeItem("pw");
  location.reload();
}

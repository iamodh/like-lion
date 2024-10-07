function saveSessionStorage() {
  sessionStorage.setItem("data1", "hello");
}

function getSessionStorage() {
  let value = sessionStorage.getItem("data1");
  let resultDom = document.getElementById("result");
  resultDom.innerHTML = value;
}

function saveLocalStorage() {
  localStorage.setItem("data2", "world");
}

function getLocalStorage() {
  let value = localStorage.getItem("data2");
  let resultDom = document.getElementById("result");
  resultDom.innerHTML = value;
}

let webSocket;
let nickname;
let resultNode;
let msgNode;

function connection() {
  let nicknameNode = document.getElementById("nickname");
  resultNode = document.getElementById("results");
  msgNode = document.getElementById("msg");

  nickname = nicknameNode.value.trim();
  if (nickname) {
    webSocket = new WebSocket("ws://localhost:3000");
    let connectNode = document.getElementById("connectDiv");
    let msgNode = document.getElementById("msgDiv");
    let nicknameResultNode = document.getElementById("nicknameResult");

    msgNode.style.display = "block";
    connectNode.style.display = "none";
    nicknameResultNode.innerHTML = nickname;
  } else {
    alert("nickname을 입력해주세요.");
  }

  nickname.value = "";

  webSocket.onmessage = (event) => {
    let liNode = document.createElement("li");
    let jsonData = JSON.parse(event.data);
    liNode.innerHTML = jsonData.nickname
      ? `${jsonData.nickname} => ${jsonData.msg}`
      : `${jsonData.msg}`;
    resultNode.appendChild(liNode);
  };
}
function send() {
  let msg = msgNode.value.trim();
  if (msg) {
    webSocket.send(
      JSON.stringify({
        nickname,
        msg,
      })
    );
    let liNode = document.createElement("li");
    liNode.innerHTML = `${nickname} => ${msg}`;
    resultNode.appendChild(liNode);
  } else {
    alert("메시지를 입력해주세요.");
  }
}

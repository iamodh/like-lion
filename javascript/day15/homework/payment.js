const $message = document.getElementById("message");
const $button = document.getElementById("button");

window.addEventListener("load", () => {
  const $p1 = document.createElement("p");
  $p1.textContent = `${opener.total}원을 결재하겠습니다.`;
  const $p2 = document.createElement("p");
  $p2.textContent = "신용카드 번호를 입력한 후 결재 버튼을 눌러주세요.";

  $message.appendChild($p1);
  $message.appendChild($p2);
});

$button.addEventListener("click", (e) => {
  e.preventDefault();
  const $card = document.getElementById("card");
  if ($card.value.trim().length === 0) {
    alert("카드 번호를 확인해주세요.");
  } else {
    opener.checkPayment($card.value);
    close();
  }
});

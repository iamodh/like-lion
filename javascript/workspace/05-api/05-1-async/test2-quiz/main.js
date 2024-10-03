let isActive = false;
let clockId;

function printCurrentTime(target) {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  target.textContent = `${hours} : ${minutes} : ${seconds}`;
}

function handleBtnClick() {
  isActive = !isActive;
  console.log(isActive);

  let btnNode = document.getElementById("button");
  btnNode.textContent = isActive ? "hide" : "show";
  let clockNode = document.getElementById("clock");

  if (isActive) {
    printCurrentTime(clockNode);
    clockId = setInterval(() => {
      printCurrentTime(clockNode);
    }, 1000);
  } else {
    clearInterval(clockId);
    clockNode.textContent = "";
  }
}

function printResult(result) {
  const resultDom = document.getElementById("result");
  resultDom.innerHTML = result;
}

function axios_basic() {
  const num = document.getElementById("num").value;
  axios({
    method: "get",
    url: `http://localhost:3000/sum/${num}`,
  }).then((response) => {
    printResult(response.data.result);
  });
}
function axios_get() {
  const num = document.getElementById("num").value;
  axios.get(`http://localhost:3000/sum/${num}`).then((response) => {
    printResult(response.data.result);
  });
}
function axios_post() {
  axios
    .post(`http://localhost:3000/post_test`, {
      name: "홍길동",
      age: 20,
    })
    .then((response) => printResult(response.data.msg));
}
``;

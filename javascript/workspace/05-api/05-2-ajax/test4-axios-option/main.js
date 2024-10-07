function printResult(result) {
  const resultDom = document.getElementById("result");
  resultDom.innerHTML = result;
}

function axios_default() {
  // axios로 서버 연동 시 공통적인 config 설정 있다면
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.timeout = 2000;

  // defaults에 설정 후 요청
  axios
    .post("post_test", {
      name: "홍길동",
      age: 20,
    })
    .then((response) => {
      printResult(response.data.msg);
    });
}
function axios_create() {
  // 개발자가 axios 객체를 직접 만드는 방법
  const myAxios = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 2000,
  });

  myAxios
    .post("post_test", {
      name: "홍길동",
      age: 20,
    })
    .then((response) => {
      printResult(response.data.msg);
    });
}
function axios_params() {
  // url 뒤에 데이터를 추가해 서버에 전송
  // header 정보를 전달하므로 get, post, put, delete, patch 모두 가능
  // header 정보로 data 전달은 한계가 있다.
  // 1. 전송하는 데이터 사이즈
  // 2. 보안
  axios({
    method: "get",
    url: "http://localhost:3000/get_test",
    params: {
      data1: "hello",
      data2: "10",
    },
  }).then((response) => {
    printResult(response.data.msg);
  });
}
function axios_transform() {
  axios({
    method: "post",
    url: "http://localhost:3000/post_test",
    data: {
      // body stream을 통해 전송
      // post, put, patch에서 사용 사능
      name: "홍길동",
      age: 30,
    },
    transformRequest: [
      // 요청시 실행되어야 하는 함수 여러개 지정
      function (data, headers) {
        // data: 서버에 전송해야 할 body stream 조작 가능
        // headers: 서버 요청 header 정보 전송 전에 조작
        console.log(data);
        console.log(headers);
        headers["Content-Type"] = "application/json"; // 헤더 정보 추가
        let newData = { ...data, key: 1 }; // data 추가
        return JSON.stringify(newData); // 리턴 시킨 값이 서버에 전송된다.
      },
    ],
    transformResponse: [
      // 응답이 도착했을 때 실행되어야 하는 함수 지정, 서버 데이터를 이용하기 전에 조작
      function (data) {
        // data: 서버에서 받은 데이터
        const jsonData = JSON.parse(data);
        let newData = { ...jsonData, index: 1 };
        return newData;
      },
    ],
  }).then((response) => console.log(response.data));
}

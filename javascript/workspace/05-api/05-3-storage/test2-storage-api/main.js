const apiTest = () => {
  sessionStorage.setItem("data1", "홍길동");
  sessionStorage.data2 = "김길동";
  sessionStorage.setItem("data3", 10);
  sessionStorage.setItem("data4", {
    name: "홍길동",
    age: 10,
  });

  console.log("data1", sessionStorage.getItem("data1"));
  console.log("data1", sessionStorage.getItem("data2"));
  console.log("data1", sessionStorage.getItem("data3"));
  console.log("data1", sessionStorage.getItem("data4"));

  // 객체의 storage 저장
  sessionStorage.setItem(
    "data5",
    JSON.stringify({
      name: "홍길동",
      age: 10,
    })
  );
  console.log("data1", JSON.parse(sessionStorage.getItem("data5")));
};

const removeTest = () => {
  // sessionStorage.removeItem("data1");
  sessionStorage.clear();
};

const getAllDataTest = () => {
  // for (let i = 0; i < sessionStorage.length; i++) {
  //   let key = sessionStorage.key(i);
  //   console.log(key, sessionStorage.getItem(key));
  // }
  let keys = Object.keys(sessionStorage);
  keys.forEach((key) => console.log(key, sessionStorage.getItem(key)));
};

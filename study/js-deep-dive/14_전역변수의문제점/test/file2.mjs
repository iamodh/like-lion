// file2.js
sayHello(); // file1.js에 정의된 함수 호출
globalVariable = "Hello from file2"; // file1.js의 전역 변수 변경
console.log(globalVariable); // 변경된 값 출력

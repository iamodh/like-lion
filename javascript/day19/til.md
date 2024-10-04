# 비동기 처리

## 1. async, await

#### async

함수 선언부에 사용한다.

async로 선언된 함수를 Promise를 반환한다.

return을 샤용하면 자동으로 resolve나 reject를 반환한다.

#### await

async 함수 내에서 사용한다.

await으로 선언된 구문이 실행이 완료될 때까지 기다린다.

#### call back hell

then 메서드 안에서 return을 사용할 때 발생하는 상황에 대해 설명해 드리겠습니다:

1. 새로운 프로미스 생성:
   then 내부에서 return문을 사용하면, 그 반환값은 자동으로 새로운 프로미스로 감싸집니다. 이 새 프로미스는 체인의 다음 then으로 전달됩니다.

2. 값 전달:
   일반 값을 반환하면, 다음 then에 그 값이 전달됩니다.
   프로미스를 반환하면, 그 프로미스가 해결될 때까지 기다린 후 결과를 다음 then에 전달합니다.

3. 비동기 작업 연결:
   return getData(2)와 같이 새로운 비동기 작업을 반환하면, 이 작업이 완료될 때까지 체인이 대기한 후 다음 단계로 진행됩니다.

4. 에러 처리:
   return된 프로미스가 거부되면, 체인의 다음 catch 블록으로 제어가 넘어갑니다.

```js
 myFun5() {
  getData(1)
    .then((value) => {
      console.log(value);
      return getData(2);  // 새로운 프로미스 반환
    })
    .then((value) => {
      console.log(value);
      return getData(3);  // 또 다른 새로운 프로미스 반환
    })
    .then((value) => {
      console.log(value);
    });
}
```

# Ajax

Asynchronous javascript XML의 약어, 서버 연동을 위한 자바스크립트 프로그램

form, a 태그와 같이 동기적으로 동작하는 연결 방식은 로딩 시간이 발생한다.

또한 서버의 응답 후 전체 페이지가 갱신되어야 한다.

비동기 통신을 사용하면 이 단점을 극복할 수 있다.

![image](https://github.com/user-attachments/assets/5d5c0a81-556a-4241-8d7a-50904284ba2a)

## 2. XMLHttpRequest

1. 객체 생성 및 전송

```js
let xhr = new XMLHttpRequest();
// get 방식으로 url에 비동기 통신으로 요청
xhr.open("get", `http://localhost:3000/sum/${numNode.value}`, true);

// 초기화된 요청을 전송
xhr.send();
```

2. 요청에 대한 결과 처리

이벤트 콜백 함수를 사용한다.

```js
xhr.onload = function () {
  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    resultNode.innerHTML = data.result;
  }
};
```

## 3. JSON

JavaScript Object Notation으로

통신을 위한 데이터의 형태를 편의를 위해 자바스크립트 객체처럼 나타낸 문자열

JSON.stringify로 객체 => JSON으로,

JSON.parse로 JSON => 객체로 변형할 수 있다.

## 4. CORS

Cross Origin Response Share의 약자로,

Ajax로 요청한 서버의 Origin이 Ajax를 요청하는 HTML의 Origin과 다른 경우 서버의 응답을 받을 수 없게 된다.

![image](https://github.com/user-attachments/assets/0f7e5849-1817-4778-9cbd-2887f05e4ded)
![image](https://github.com/user-attachments/assets/ec87f41f-609e-407c-801b-550b14115759)

다른 오리진의 서버와 Ajax 통신이 되려면 백엔드 쪽에서 응답 헤더에 CORS 허가 관련 코드를 추가해주어야 한다.

# Storage

## 1. storage 이벤트

storage에 저장된 key, value 데이터가 저장, 수정, 제거 되었을 때의 event

데이터가 변경된 페이지에서 이벤트 콜백 함수를 등록해주어야 한다.

![image](https://github.com/user-attachments/assets/0f9db1c5-8394-4e5e-ba50-29a6ff621d4d)

> localStorage의 데이터 변경은 새로운 창, 또는 window.open에서 확인 가능하고, sessionStorage의 데이터 변경은 iframe으로 생성한 창에서 확인할 수 있다.

#### 콜백 함수의 인자

event 객체를 인자로 사용하여

key, newValue, oldValue, storageArea, url 등 이용할 수 있다.

# Web Socket

## 1. 클라이언트와 서버

- 클라이언트: 서버의 네트워크 주소를 알고, 연결 요청을 보내는 곳

- 서버: 항상 실행되다가, 발생한 연결 요청을 완성시켜주는 곳

## 1. stateless

HTTP 프로토콜의 특징

- Connection Oriented: 서버와의 데이터 교환을 위해 커넥션이 필요하다.

- Stateless

  브라우저 클라이언트에서 보낸 요청에 대해 서버는 응답을 하고, 해당 connection은 close된다.

  이후 요청을 보낼 때는 새로운 connectrion을 생성한다.

**장점**
실제 data를 주고받을 때만 connection을 유지하고 브라우저에서 data를 이용할 때 connection을 끊어 서버 경량화의 이점이 있다.

> 0.3초 data 공유시 connect, 많은 유저가 5분 데이터 이용 시 disconnect

**단점**

1. 클라이언트의 상태 유지를 프로토콜 자체로 할 수 없다.

- 여러 유저에 대한 커넥션이 있을 때 특정 커넥션이 어느 유저와 연결되어 있는지 확인할 수 없다.

- 코드 상에서 데이터의 유지가 필요하다. (세션과 쿠키)

2. Realtime server push 불가

- 서버에서 데이터에 변경이 발생했을 때 클라이언트에 알려줄 수 없다. (채팅, 증권 불가)

## 2. Web Soeckt 사용

클라이언트와 서버 사이 커넥션을 유지한 상태에서 데이터 변경시 상호 작용을 도와주는 프로그램을 Socket
프로그램이라고 한다.

1. 서버 연결

ws 프로토콜을 사용하여 WebSocket 객체를 생성, 서버와 연결한다.

```js
webSocket = new WebSocket("ws://localhost:3000");
```

2. 데이터 송신

WebSocket 객체의 send 메서드를 사용한다.

```js
webSocket.send(`${nickname} => ${msg}`);
```

3. 데이터 수신

언제 데이터가 넘어올 지 모르기 때문에 event 모델을 사용한다.

```js
webSocket.onmessage = (event) => {
  let data = event.data;
};
```

## 3. Web Socket 서버 구현

ws 라이브러리를 사용해 nodejs로 구현한다.

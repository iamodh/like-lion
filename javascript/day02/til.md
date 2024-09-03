# Javascript Basic

# 1. 자바스크립트 시작하기

#### 브라우저 렌더링 과정

HTML로 DOM을 만들고, CSS로 CSSOM을 만들어서 둘을 결합하면(javascript를 통해 DOM을 변경할 수도 있다 예를 들어, `appendchild()`) render tree가 완성된다. 이를 브라우저에 나타내면(paint) 우리가 보는 웹페이지가 완성된다.

![image](https://github.com/user-attachments/assets/2d49e302-6918-43c4-9bc1-81131c982edc)

#### html 파일 내 스크립트의 위치

자바스크립트 코드가 DOM 노드를 이용한다면 이용하는 DOM 노드가 메모리에 로딩된 후에 해당 자바스크립트 코드가 실행되게 해주어야 한다.

![image](https://github.com/user-attachments/assets/23cbe1b3-a947-4e97-8577-4da0b1bf3357)

1. HTML 파서가 한 줄씩 읽으며 메모리에 로딩한다.

2. script 태그를 만나면 파싱을 멈추고 자바스크립트 엔진이 실행된다.

3. 메모리에 로딩되지 않은 DOM 노드에 접근 시 런타임 에러가 발생한다.

> script 태그는 런타임 에러를 방지하기 위해 body의 클로징 태그 위에 쓰인다.

---

```js
window.addEventListener("load", func);
```

`load` 이벤트 콜백 함수를 사용하면 `html` 파싱이 끝난 후 `func`이 실행된다.

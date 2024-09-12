# 이벤트 프로그래밍

## 1. 브라우저 이벤트

## 2. 사용자 이벤트

사용자의 키 입력 등에 따라 발생하는 이벤트

- 마우스 이베트
- 키 이벤트
- HTML FORM 관련 이벤튼

## 3. 구조

![image](https://github.com/user-attachments/assets/12ba9108-0156-4301-a9ea-1b3063d4670c)

이벤트 소스와 이벤트 핸들러를 리스너로 연결해야 한다.

```js
window.addEventListner("load", () => {
  console.log("HTML 문서 로딩이 완료되었습니다.");
});
```

```js
window.onload = () => {
  console.log("HTML 문서 로딩이 완료되었습니다.");
};
```

```html
<button onclick="myEventHandler()">버튼</button>
```

위의 방법들 중 주로 `addEventListner`를 사용하는데, 다음의 장점들이 있다.

- 같은 이벤트에 새로운 핸들러를 추가하면 기존 동작을 덮어쓰지 않는다. (누적된다.)

- 이벤트에 하나 이상의 핸들러를 등록할 수 있다.

- 버블링/ 캡쳐링 설정을 할 수 있다.

# 마우스 이벤트

```js
let area = document.querySelector("#area");

area.addEventListner("mousemove", (e) => {
  console.log(
    `offset(${e.offsetX}, ${e.offsetY}), page(${e.pageX}, ${e.pageY})`
  );
});
```

![image](https://github.com/user-attachments/assets/4f6bab28-85ff-4e83-a8b2-25acdf66c715)

`offset`은 `area`의 좌상단을 원점으로, `page`는 브라우저 페이지의 좌상단을 원점으로 한다.

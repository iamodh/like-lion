# 브라우저 내장 객체

## 1. location

#### 프로퍼티

예시 도메인: http://www.example.com:8080/search?q=devmo#test

<table>
<tbody>
    <tr>
        <th>프로퍼티</th>
        <th>설명</th>
        <th>예시</th>
    </tr>
     <tr>
        <td>href</td>
        <td>URL 반환</td>
        <td>http://www.example.com:8080/search?q=devmo#test</td>
    </tr>
     <tr>
        <td>protocol</td>
        <td>프로토콜 반환</td>
        <td>/search</td>
    </tr>
    <tr>
        <td>host</td>
        <td>URL의 도메인과 포트 반환</td>
        <td>www.example.com:8080</td>
    </tr>
     <tr>
        <td>hostname</td>
        <td>URL의 도메인 반환</td>
        <td>www.example.com</td>
    </tr>
    <tr>
        <td>port</td>
        <td>서버 포트 반환</td>
        <td>8080</td>
    </tr>
    <tr>
        <td>pathname</td>
        <td>URL 경로 반환</td>
        <td>/search</td>
    </tr>
    <tr>
        <td>search</td>
        <td>쿼리 스트링 반환</td>
        <td>?q=devmo</td>
    </tr>
        <tr>
        <td>hash</td>
        <td>주소값에 붙어이쓴 anchor 값 반환</td>
        <td>#test</td>
    </tr>
     <tr>
        <td>origin</td>
        <td>프로토콜 + URL의 도메인 + 포트 반환</td>
        <td>http://www.example.com:8080</td>
    </tr>
</tbody>
</table>

#### 메서드

<table>
  <tbody>
    <tr>
      <th>메서드</th>
      <th>설명</th>
    </tr>
    <tr>
      <td>reload()</td>
      <td>페이지 새로고침</td>
    </tr>
    <tr>
      <td>replace(url)</td>
      <td>새로운 주소로 이동(세션 히스토리가 남지 않기 때문에 뒤로가기 불가)</td>
    </tr>
  </tbody>
</table>

> `location.href`에 값을 할당해 주소 이동을 하면 뒤로 가기를 사용할 수 있지만, `replace()`는 사용할 수 없다.

## 2. history

브라우저의 히스토리 정보를 이용하는 객체

- `back()`
- `forward()`
- `go()`: 숫자를 받아 해당 인덱스의 히스토리로 이동

## 3. screen

브라우저가 실행되는 스크린 정보를 나타내는 객체

- `width()`, `height()`: 스크린 전체 사이즈
- `availWidth()`, `availHeight()`: 사용 가능한 스크린 사이즈

## 4. navigator

브라우저의 정보 혹은 기능에 접근할 수 있는 객체

- `cookieEnabled`
- `language`
- `onLine`: 브라우저 네트워크 연결 여부
- `userAgent`: 브라우저, 플랫폼 정보

# document 내장 객체

## 1. Node 이용

#### innerHTML vs innerText

`innerHTML`은 노드의 모든 하위요소를 포함하지만 `innerText`는 텍스트만 포함한다.

`innerHTML`에 html 문자열을 할당하면 파싱되기 때문에 하위 DOM 노드를 추가할 수 있다.

#### 속성 이용

getAttribute, setAttribute, removeAttribute, hasAttribute

#### 캡처링과 버블링

노드의 중첩 구조에서 여러 노드에 이벤트 핸들러가 등록 되었을 때

캡처링은 상위 노드부터 하위 노드 방향으로,

버블링은 하위노드부터 상위 노드 방향으로 이벤트가 발생한 노드를 찾아가는 것이다 .

<img src="https://github.com/user-attachments/assets/7006737a-1e82-47da-bdf0-f7d3e861beba" width="400px"
/>

이벤트는 캡처링과 버블링의 순서로 항상 전파된다.

이 때 `addEventListner()` 함수의 세 번째 매개변수를 사용하여
둘 중 어떤 단계에서 이벤트를 발생할 지 제어할 수 있다.

매개변수 값이 `false`면 버블링 단계, `true`면 캡처링 단계에서 이벤트가 발생한다. (초기값은 `false`이다.)

```js
// event handler (bubbling)
area1.addEventListener("click", function () {
  console.log("bubbling area1 event handler");
});

area2.addEventListener("click", function () {
  console.log("bubbling area2 event handler");
});

// event handler (capturing)
area1.addEventListener(
  "click",
  function () {
    console.log("capturing area1 event handler");
  },
  true
);

area3.addEventListener(
  "click",
  function (e) {
    console.log("capturing area3 event handler");
  },
  true
);
```

![image](https://github.com/user-attachments/assets/2c9ab133-a56b-4bd5-a293-128ce1acfb8a)

`event.stopPropagation()` 함수를 사용하면 해당 노드 이후로의 이벤트 전파를 막을 수 있다.

```js
// event handler (bubbling)
area1.addEventListener("click", function () {
  console.log("bubbling area1 event handler");
});

area2.addEventListener("click", function () {
  console.log("bubbling area2 event handler");
});

// event handler (capturing)
area1.addEventListener(
  "click",
  function (e) {
    console.log("capturing area1 event handler");
    e.stopPropagation();
  },
  true
);

area3.addEventListener(
  "click",
  function (e) {
    console.log("capturing area3 event handler");
  },
  true
);
```

![image](https://github.com/user-attachments/assets/697535a0-0d30-491b-9faa-94a37acc71cf)

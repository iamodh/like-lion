# Date

## 1. 객체 생성

```js
const date = new Date();

// Thu Sep 19 2024 09:44:41 GMT+0900 (한국 표준시)
console.log(date);

// '2024. 9. 19. 오전 9:44:41'
console.log(date.toLocaleString());

// 월은 0 - 11까지 있으므로 1을 빼 준다.
const date2 = new Date(2024, 12 - 1, 25, 0, 0, 0);

const date3 = new Date("2024-12-25T00:00:00");
```

## 2. timestamp

그리니치 천문대를 기준으로 1970년 1월 1일 이후로 경과한 시간을 의미한다.

```js
const date = new Date();
const date2 = new Date(2024, 12 - 1, 24, 0, 0, 0, 0);

console.log(date.getTime() < date2.getTime()); // true
```

## 3. window.open

부모와 자식 창은 서로 다른 메모리에 HTML 단위로 할당된기 때문에 HTML 문서를 위한 메모리는 해당 문서의 자바스크립트에서만 이용할 수 있다.

따라서 다른 창의 변수와 함수를 공유하려면 opener가 필요하다.

- 자식 창에서 부모의 변수 함수 사용하기

  opener 객체 사용 (var로 선언된 변수만 사용 가능하다.)

- 부모 창에서 자식의 변수 함수 사용하기

  1. 자식창에서 opener.child = this 로 opener에 프로퍼티 추가

  2. 부모창에서 child 객체 사용

---

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      // 부모의 data
      var mainData = 10;
      function mainFun() {
        console.log("mainFun call...");
      }

      // child 창 띄우기
      function goChild() {
        window.open(
          "child.html",
          "_blank",
          "left=100,top=100,width=300,height=400"
        );
      }

      // child data 사용
      function getChildData() {
        console.log(child.childData);
        child.childFun();
      }
    </script>
  </head>
  <body>
    <h1>I am Parent Page!!</h1>
    <button onclick="goChild()">go child</button>
    <button onclick="getChildData()">get child data</button>
  </body>
</html>
```

**child.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      // 부모 data 사용
      function getMainData() {
        console.log("child log", opener);
        opener.mainFun();
      }

      // child data
      var childData = 20;
      function childFun() {
        console.log("childFun call");
      }

      // child 지정
      opener.child = this;

      // close 시 부모 url 변경
      function myClose() {
        opener.location.href = "http://www.naver.com";
        close();
      }
    </script>
  </head>
  <body>
    <h1>I am Child Page!!</h1>
    <button onClick="getMainData()">get main data</button>
    <button onClick="myClose()">close</button>
  </body>
</html>
```

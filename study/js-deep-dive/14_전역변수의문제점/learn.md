# 전역스코프의 네임스페이스 오염

```html
// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="./file1.js"></script>
    <script src="./file2.js"></script>
  </body>
</html>
```

```js
// file1.js
var globalVariable = "Hello from file1";

function sayHello() {
  console.log(globalVariable);
}
```

```js
// file2.js
sayHello(); // file1.js에 정의된 함수 호출
globalVariable = "Hello from file2"; // file1.js의 전역 변수 변경
console.log(globalVariable); // 변경된 값 출력
```

다른 파일(file1.js)에 있는 전역 스코프의 변수 globalVariable과 함수 sayHello를 file2.js에서 사용하거나 변경할 수 있는 모습이다.

이는 다음과 같은 예상치 못한 결과를 가져올 수 있다.

1. 이름 충돌

2. 의도치 않은 변수 수정

3. 전역 변수 오염: 많은 코드가 전역 변수에 접근하고 변경하게 된다.

4. 디버깅과 유지보수의 어려움: 어느 코드에서 변수가 선언되었고 어떻게 수정되었는지 추적하는 것이 매우 어려워진다.

5. 모듈화와 재사용성의 저하: 같은 전역 변수를 참조하는 의존성이 생기면 독립적인 관리가 어려워진다.

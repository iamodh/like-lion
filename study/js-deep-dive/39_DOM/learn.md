## 1. DOM API를 통해 획득한 노드를 할당하는 변수 이름 컨벤션

```js
const $elem = document.getElementById("banana");
```

위와 $이 붙는 변수 이름은 jQuery에서 `$()` 함수를 이용해 DOM을 선택하는 데서부터 내려온 관습이다.

> 일반 변수와 구분을 위해서 좋은 방법인 것 같다.

## 2. id 어트리뷰트가 script의 전역 변수로 사용되는 경우

HTML 요소에 id 어트리뷰트를 부여하면 동일한 이름의 전역 변수가 **암묵적으로 선언되고** 해당 노드 객체가 할당되는 부수 효과가 있다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="foo"></div>
    <script>
      console.log(foo);
    </script>
  </body>
</html>
```

![image](https://github.com/user-attachments/assets/6b7d35c8-6cf4-465d-872c-fcf3870e0406)

위와같이 전역변수를 사용하여 노드 객체에 접근할 수 있지만 네임스페이스 오염, 성능, 명시성과 가독성, 유지 보수성 등의 문제가 생길 수 있다.

> 따라서 getElementById 메서드를 사용하여 접근하는 것이 권장된다.

## 3. HTMLCollection 객체와 forEach

HTMLCollection 객체는 인덱스로 접근할 수 있고 length 속성을 가지는 유사배열객체이다.

하지만 배열은 아니기 때문에 `Array.prototype.forEach()` 메서드를 사용할 수 없다.

```html
<body>
  <ul>
    <li id="apple">Apple</li>
    <li id="banana">banana</li>
    <li id="orange">Orange</li>
  </ul>
  <script>
    const $elems = document.getElementsByTagName("li");
    $elems[0].style.color = "red";
    // $elems.forEach((elem) => (elem.style.color = "red"));
  </script>
</body>
```

![image](https://github.com/user-attachments/assets/2e1f3b7e-dcad-49dc-b0a5-bd4ef6b416a9)

#### 해결 방법

1. 배열로 변환

- `Array.from()`

  ```js
  Array.from($elems).forEach((elem) => (elem.style.color = "red"));
  ```

- 스프레드 연산자

  ```js
  [...$elems].forEach((elem) => (elem.style.color = "red"));
  ```

2. 다른 루프 사용

- for...of 루프

  ```js
  for (const elem of $elems) {
    elem.style.color = "red";
  }
  ```

- for 루프

  ```js
  for (let i = 0; i < $elems.length; i++) {
    $elems[i].style.color = "red";
  }
  ```

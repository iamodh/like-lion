# 💡TIL

## 1. DOM 노드

HTML 파싱 후 생성된 DOM에서 노드들은 문서 노드, 요소 노드, 어트리뷰트 노드, 태그 노드, 주석 노드의 종류가 있고,

각자의 규칙대로 태그 노드에 자식 또는 형제 노드로 연결된다.

주석 노드 또한 태그 노드에 연결되며, 자바스크립트 코드로 접근할 수 있다.

[주석 노드 접근 방법](https://claude.ai/chat/6b3e46f5-3801-4fea-bd6f-c91697cecd56)

## 2. Node 셀렉터

#### 프로토타입 체인

프로토타입이 뭔지 아직 잘 모르겠지만...

셀렉터를 사용할 때 document 객체 말고도 Element 객체,

다음과 같이 노드 자체에서 셀렉터 메서드를 호출할 수 있다는 것을 알게 되었다.

```js
const $fruits = document.getElementById("fruits");
const $listFromFruits = $fruits.getElementsByTagName("li");
```

#### 종류

querySelector, getElementBy 등 셀렉터의 사용에 따라 반환되는 객체의 자료 구조가 다르다.

하지만 querySelector의 실행 속도가 다른 셀렉터 메서드에 비해 빠른 것으로 알려저 있어서

id 어트리뷰트가 있는 요소를 제외하고는 querySelector의 사용이 권장된다.

#### 셀렉터 반환 객체의 자료구조

getElementBy... 메서드를 사용하면 HTMLCollection 객체가,

querySelector를 사용하면 NodeList 객체가 반환된다.

HTMLCollection 객체와 NodeList의 프로퍼티 childNodes는 유사객체배열로,

index 사용과 length 프로퍼티를 가지고 있지만 forEach 사용이 불가하다.

NodeList는 Document.prototype과 Element.prototype에 정의된 forEach사용이 가능하지만,

Array.prototype에서 제공되는 forEach, filter 등과 같은 다양한 메서드 사용을 위해

스프레드 문법으로 배열로 변환 후 사용하는 것이 편리하다.

```js
[...$elems].forEach((elem) => (elem.style.color = "blue"));
```

# 📖 실습

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

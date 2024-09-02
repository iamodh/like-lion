# 객체

## 1. 일급 객체

프로그래밍 언어에서 일급 객체는 다음의 조건을 만족합니다.

- 변수나 데이터에 담을 수 있다.

  ```js
  const foo = () => {
    console.log("foobar");
  };
  foo(); // 변수를 사용해 호출
  // foobar
  ```

- 함수의 파라미터로 전달될 수 있다.
  ```js
  function sayHello() {
    return "Hello, ";
  }
  function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
  }
  // `sayHello`를 전달인자로 `greeting` 함수에 전달
  greeting(sayHello, "JavaScript!");
  // Hello, JavaScript!
  ```
- 함수의 리턴 값으로 사용할 수 있다.
  ```js
  function sayHello() {
    return () => {
      console.log("Hello!");
    };
  }
  ```

> 자바스크립트에 함수는 값으로 취급할 수 있는 일급 객체이므로 **프로퍼티 값**으로 사용할 수 있습니다.

## 2. 객체 프로퍼티에 접근

`.`연산자와 `[]`를 사용해 객체의 프로퍼티 값에 접근할 수 있다.

- 프로퍼티 키가 식별자 네이밍 규칙을 따르는 경우 일반적으로 `.`연산자를 사용한다.

  ```js
  const person = {
    name: "John",
    age: 30,
  };

  console.log(person.name); // "John"
  ```

- 프로퍼티 키가 식별자 네이밍 규칙을 따르지 않거나 동적 문자열의 프로퍼티가 필요할 때 `[]`를 사용한다.

  ```js
  var obj = {};
  var key = "hello";

  obj[key] = "world";

  console.log(obj); // {hello: "world"};
  ```

  ```js
  const prefix = "prop";
  let i = 0;

  const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
  };

  console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
  ```

- `[]` 안에 숫자를 사용하면 자동으로 문자열로 변환되어 프로퍼티에 접근한다. (이 경우엔 `.`연산자를 사용할 수 없다.)

  ![image](https://github.com/user-attachments/assets/194cab55-25e0-41a7-91bd-5454bd7ef768)

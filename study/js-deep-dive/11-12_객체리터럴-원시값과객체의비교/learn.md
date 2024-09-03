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

`.`연산자와 `[]`를 사용해 객체의 프로퍼티 값에 접근할 수 있습니다.

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

# 값에 의한 전달

변수에 원시 값을 갖는 변수를 할당하면 값에 의한 전달이 발생합니다.

```js
var score = 80;

var copy = score;
```

![image](https://github.com/user-attachments/assets/fc18944b-7062-40e5-8981-5cc1989e1680)

`score`과 `copy`는 다른 메모리 공간을 가리킵니다.

따라서 `copy`의 값을 `100`으로 바꿔도 (재할당) `score`의 값은 `80`으로 변하지 않으며,

이것을 **깊은 복사**라고 합니다.

> 깊은 복사에서 원본과 복사본은 서로 간섭할 수 없다.

# 참조에 의한 전달

객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달됩니다.

![image](https://github.com/user-attachments/assets/9bae171c-af66-46cc-8280-67230fb2d330)

```js
var person = {
  name: "Lee",
};

var copy = person;

copy.name = "Kim";
console.log(person.name); // "kim"
```

따라서 위 코드에서 복사본 `copy`의 프로퍼티를 수정하게 되면, 원본의 프로퍼티도 함께 수정됩니다. (두 식별자가 한 객체를 공유합니다.)

# 얕은 복사와 깊은 복사

#### 얕은 복사

원본과 복사본이 서로 영향을 주는 것을 얕은 복사라고 합니다.

```js
const o = { x: { y: 1 } };

// 새로운 객체를 선언 후 o의 프로퍼티를 전개연산자를 이용해 복사
const c1 = { ...o };

console.log(c1 === o); // false (메모리 주소의 비교)
console.log(c1.x === o.x); // true (평가된 값의 비교)

c1.x.y = 2;
console.log(o.x.y); // 2
```

위 코드에서 `c1`은 `o`의 복사본으로, `o`와 동일한 프로퍼티를 가지고 있습니다.

전개 연산자를 이용해 생성된 새로운 객체이므로 `o`와 `c1`이 가리키는 메모리 주소는 다릅니다.

하지만 `c1.x`와 `o.x`는 같은 객체를 가리키므로, `c1.x`의 값을 변경하면 `o.x`의 값도 함께 바뀝니다.

> 중첩된 객체라도 서로 영향을 주면 얕은 복사이다.

---

#### 객체의 깊은 복사

값에 의한 전달과 같이 원본과 복사본이 서로 간섭할 수 없을 때를 **깊은 복사**라고 합니다.

`JSON` 객체의 메서드, `...` 스프레드 문법이나 `loadsh` 모듈을 사용해 객체의 깊은 복사본을 만들 수 있습니다.

객체의 깊은 복사는 보통 기존 데이터를 보존하면서 새로운 데이터를 추가할 때 사용됩니다.

```js
function updatePerson(person, newAge) {
  // 깊은 복사를 통해 원본 객체를 보존
  const updatedPerson = JSON.parse(JSON.stringify(person));
  updatedPerson.age = newAge;
  return updatedPerson;
}

const originalPerson = {
  name: "Jane",
  age: 25,
  address: {
    street: "456 Elm St",
    city: "Othertown",
    state: "NY",
  },
};

const newPerson = updatePerson(originalPerson, 28);

console.log(originalPerson.age); // 25 - 원본 데이터는 변경되지 않음
console.log(newPerson.age); // 28 - 복사본만 변경됨
```

위 코드에서 `person`의 `age` 프로퍼티를 `newAge`로 변경하는 함수 `updatePerson()`은 깊은 복사를 통해 매개변수로 참조에 의해 전달되는 원본 `person`을 변경하지 않습니다. (이것은 리액트에서 **Immutable Object**로 중요하게 다뤄집니다.)

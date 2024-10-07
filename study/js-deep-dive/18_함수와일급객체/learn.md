**스터디 진행 일시** : 2024. 10. 4. (금) 16:00

**발표자** : 오동환

**참여자** : 김은서, 장유진

**스터디 진행 방식** : 발표자가 요약한 스터디 주제의 내용 발표

**원본 링크** : [https://huchu.link/a5N7Ea7](https://huchu.link/94yJ1l3)

---

# 📖책 내용 요약

함수는 일급 객체이며, 객체와 동일하게 사용할 수 있다.

함수는 객체이지만 일반 객체와는 차이가 있다.

일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.

그리고 함수 객체는 일반 객체에 없는 함수 고유의 프로퍼티를 소유한다.

#### arguments

arguments 객체는 함수 호출 시 전달된 인수들의 정보를 답고 있는 순회 가능한 유사 배열 객체이며,

함수 내부에서 지역 변수처럼 사용된다. (함수 외부에서는 참조할 수 없다.)

```
function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 2
```

함수에 인자가 전달되지 않으면 매개변수는 `undefined`로 초기화된 채 함수가 실행된다.

인자의 개수가 매개변수의 개수를 초과하면 초과된 인자는 무시된다.

**출력된 arguments 객체**

![image](https://github.com/user-attachments/assets/4cd46326-eb65-41bc-a593-ab5688948cd3)

- `callee` 프로퍼티는 호출되어 `arguments` 객체를 생성한 함수, 즉 자신을 가리킨다.
- `length` 프로퍼티는 인수의 개수를 가리킨다.
- Symbol.iterator 프로퍼티는 arguments 객체를 순회 가능한 자료구조인 이터러블로 만들기 위한 프로퍼티다.

함수 객체의 `arguments` 프로퍼티를 이용해 가변 인자 함수를 구현할 수 있다.

#### caller

비표준 프로퍼티로 함수 자신을 호출한 함수를 가리킨다.

#### length

함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.

```
function foo(x, y) {
  console.log(foo.length);
  console.log(arguments.length);
}

foo(1, 2, 3); // 2, 3
```

> arguments의 length 프로퍼티는 함수 인자의 개수를, 함수 객체의 length는 매개변수의 개수를 가리킨다.

#### name

함수 객체의 name 프로퍼티는 함수 이름을 나타낸다.

익명 함수 표현식의 경우 ES5에서 name 프로퍼티는 빈 문자열을 값으로 갖지만 ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖는다.

함수 선언문에서 살펴본 바와 같이 함수 이름과 함수 객체를 가리키는 식별자는 의미가 다르다는 것을 주의한다. (함수 호출은 식별자로 호출한다.)

#### `__proto__` 접근자 프로퍼티

모든 객체는 `[[prototype]]`이라는 내부 슬롯을 갖는다.

`__proto__` 프로퍼티는 `[[prototype]]` 내부슬롯이 가리키는 프로토타입 객체에 접근사기 위해 사용하는 접근자 프로퍼티다.

```
const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입은 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.hasOwnProperty("a")); // true
// 프로토타입 객체인 Object.prototype으로부터 __proto__ 프로퍼티를 상속받는다.
conosle.log(obj.hasOwnProperty("a")); // false
```

hasOwnProperty Object.prototypel의 메서드로 고유의 프로퍼티 키인지 여부를 리턴한다.

#### prototype

prototype 프로퍼티는 constructor만 소유하는 프로퍼티다.

함수가 객체를 생성하는 생성자 함수로 호출될 때 생성자 함수가 생성할 인스턴스의 프로토타입 객체를 가리킨다.

---

# 🔍조사한 내용

## 이터러블

ES6에서 도입된 이터레이션 프로토콜을 준수하면 순회 가능한 자료구조인 이터러블이 된다.

유사 배열 객체와 이터러블은 다른 개념이다.

유사 배열 객체는 index로 요소에 접근할 수 있으면서 lengh 프로퍼티를 가지고 있는 객체이고,

이터러블은 Symbol.iterator 프로퍼티를 가지고 있어 for...of 루프로 순회할 수 있다.

#### 예시

- 유사배열객체: 함수의 arguments 객체, DOM의 NodeList 등
- 이터러블: Array, String, Map, Set 등

## Symbol.iterator

Symbol.iterator 프로퍼티는 arguments 객체를 순회 가능한 자료구조인 이터러블로 만들기 위한 프로퍼티다.

```js
function multiply(x, y) {
  const iterator = arguments[Symbol.iterator]();
  console.log(iterator.next()); // {value: 1, done: false}
  console.log(iterator.next()); // {value: 2, done: false}
  console.log(iterator.next()); // {value: 3, done: false}
  console.log(iterator.next()); // {value: undefined, done: false}

  return x * y;
}

multiply(1, 2, 3);
```

- `value`는 `iterator`가 가리키고 있는 요소의 값을, `done`은 해당 요소가 마지막인지 여부를 나타내는 값이다.

- `next()`가 호출되기 전 `value`와 `done`의 값이 둘 다 `undefined`로 초기화되어있는 것이 아니라, `next()` 호출 시 `value`와 `done` 값이 계산되어 객체가 생성된다.

## for...in과 for...of

1. for...in 루프:

- 객체의 열거 가능한(enumerable) 속성을 순회합니다.
- 유사배열 객체에 사용 가능합니다.

2. for...of 루프:

- 이터러블 객체의 각 요소를 순회합니다.
- Symbol.iterator 메서드가 구현된 객체에서만 사용 가능합니다.

```js
// 유사배열 객체
let arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
// for...in 사용 (유사배열 객체에 가능)
for (let key in arrayLike) {
  console.log(key, arrayLike[key]); // 0 a, 1 b, 2 c
}

// 이터러블 객체 (배열)
let iterable = ["a", "b", "c"];
// for...in 사용 (가능하지만 권장되지 않음)
console.log("for...in on iterable:");
for (let key in iterable) {
  console.log(key, iterable[key]); // 0 a, 1 b, 2 c
}

// for...of 사용 (이터러블에 적합)
console.log("for...of on iterable:");
for (let value of iterable) {
  console.log(value); // a, b, c
}
```

> for... in은 유사 배열 객체에 사용, key로 순회, for...of는 이터러블에 사용, value로 순회

## 가변 인자 함수

함수 객체의 `arguments` 프로퍼티를 이용해 가변 인자 함수를 구현할 수 있다.

```js
function sum() {
  let res = 0;

  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6
```

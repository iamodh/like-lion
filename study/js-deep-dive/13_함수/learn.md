# 함수

## 1. 함수 선언문과 함수 표현식

자바스크립트에서 함수를 정의하는 방법은 **함수 선언문**을 사용하는 것과 **함수 표현식**을 사용하는 방법이 있다.

둘은 **함수 호이스팅**의 지원 여부가 다르기 때문에 구분이 필요한데,

함수 표현식에 사용되는 **함수 리터럴**과 **함수 선언문**의 형태가 같아 구분이 헷갈릴 수 있기에 정리가 필요하다.

#### 함수 리터럴

```js
var f = function add(x, y) {
  return x + y;
};
```

- 함수 리터럴은 평가되어 값을 생성하며, 이 값은 객체다.

- 함수 이름 `add`는 생략 가능하다.

- 함수 이름 `add`는 함수 몸체 내에서만 참조할 수 있다.

- 일반적으로 리터럴은 단독으로 사용되지 않고, 위와 같이 평가된 값이 변수(식별자)에 할당되어 **함수 표현식**을 구성한다.

#### 함수 선언문

```js
function add(x, y) {
  return x + y;
}
```

- 함수 선언문은 단독으로 함수를 정의하며, 함수 이름 `add`와 동일한 식별자 `add`에 암묵적으로 할당된다.

- 함수 이름을 생략할 수 없다.

- 표현식이 아닌 문으로, 평가 시 `undefined`를 반환한다.

> 함수 리터럴이 피연산자로 사용된 경우 이를 함수 표현식이라 하고, 그렇지 않을 경우 함수 선언문이라 한다.

## 2. 호이스팅

호이스팅이란 자바스크립트 엔진이 런타임 전 평가 과정에서 선언문을 먼저 찾아내어 평가되어,

해당 코드가 실행하기 이전에 특정한 값을 가지는 것을 말한다

호이스팅에는 두 종류가 있는데, 일반적인 변수에 적용되는 **변수 호이스팅**과 함수에 적용되는 **함수 호이스팅**으로 나누어진다.

#### 함수 선언문과 호이스팅

함수 선언문으로 함수를 정의하면 평가 과정에서 암묵적으로 변수가 생성되어 함수 객체가 변수에 할당되는 것 까지 완료된다.

따라서 런타임의 함수 정의 전에도 아래처럼 함수를 사용할 수 있는 **함수 호이스팅**이 발생한다.

```js
console.dir(add); // f add(x, y)
console.log(add(2, 5)); // 7

function add(x, y) {
  return x + y;
}
```

#### 함수 표현식과 호이스팅

함수 표현식은 함수 리터럴을 변수에 할당하는 할당문이다.

할당문은 평가 과정에서 변수 선언까지 완료된 후, 변수에 undefined가 할당된다.

따라서 함수 표현식으로 정의된 함수는 할당 이전에 사용될 수 없으며, 함수가 할당된 변수는 `undefined`로 초기화되는 변수 호이스팅이 발생한다.

```js
console.dir(sub); // undefined
console.log(sub(2, 5)); // TypeError: sub is not a function

var sub = function (x, y) {
  return x - y;
};
```

![image](https://github.com/user-attachments/assets/e9971050-6280-4100-9872-ab562966772b)

## 3. JSDoc

자바스크립트의 함수는 매개변수의 개수와 인수의 개수가 일치하는지 체크하지 않는다.

```js
function add(x, y) {
  return x + y;
}

console.log(add(2)); // NaN
```

런타임 이전에 이러한 오류를 체크하고 에러를 발생시키려면 타입스크립트와 같은 정적 타입 언어를 사용해야하는데,

대신 **JSDoc**을 사용하여 코드의 이해를 위한 **가독성이 높은 주석**을 달고,

**함수의 정보**와 함께 **인수의 타입에 대한 자동완성 기능**을 사용해 개발 중 실수를 줄일 수 있다.

```js
/**
 * 이름과 나이 입력받아 출력하는 함수
 * @param {string} name 이름 입력란 입니다!
 * @param {number} age 나이 입력란 입니다!
 * @returns 이름과 나이를 출력합니다~
 */
const lime = (name, age) => {
  return name + age;
};
```

<img width="300px" src="https://github.com/user-attachments/assets/03496d7d-7dcd-47cd-956a-fe8735b83417" />

함수에 `@param` 태그로 인수의 정보를 표시하는 방법

https://jsdoc.app/tags-param

## 4. 즉시 실행 함수

즉시 실행 함수란 함수 리터럴을 그룹 연산자`()`로 함수 객체가 변수에 할당하는 과정 없이 바로 실행되는 것을 말한다.

즉시 실행 함수에는 주로 무기명 함수를 사용한다.

```js
(function () {
  var a = 3;
  var b = 5;
  return a * b;
});
```

즉시 실행 함수는 한 번 실행되고 사라지므로 함수 내 스코프에서 변수를 자유롭게 사용할 수 있다는 장점이 있다.

#### 사용 예시

```js
let isAdult;

(function init(age) {
  let currentAge = age;
  if (age >= 20) {
    isAdult = true;
  } else {
    isAdult = false;
  }
})(20);
```

위 코드에서 즉시 실행 함수 `init`은 내부 변수 `currentAge`를 이용해 전역 변수 `isAdult`를 초기화한다.

```js
let isAdult;
let currentAge = 20;

if (currentAge >= 20) {
  isAdult = true;
} else {
  isAdult = false;
}

console.log(isAdult); // true
console.log(currentAge); // 20
```

즉시 실행 함수를 사용하지 않은 경우 초기화하는데 사용된 변수 `currentAge`를 캡슐화하지 않았기 때문에, 코드의 유지보수성이 떨어진다.

# 명시적 타입 변환

개발자가 의도적으로 값의 타입을 변경하는 것으로

- 표준 빌트인 생성자 함수를 new 연산자 없이 호출하는 방법

- 빌트인 메서드를 사용하는 방법

- 암묵적 타입 변환을 이용하는 방법이 있다.

## 1. String과 toString의 차이

```js
String(1); // "1"
String(NaN); // "NaN"
String(null); // "null"
String(undefined); // "undefined"

(1).toString(); // "1"
NaN.toString(); // "NaN"

// Uncaught TypeError: Cannot read properties of null / undefined
null.toString();
undefined.toString();
```

생성자 함수 `String`은 매개변수를 `String` 객체를 생성한다. (문자열을 감싸고 있음)

반면 `toString()`은 메서드로 객체가 프로퍼티로 가지고 있는 함수이다.

`undefined`, `null`은 객체가 아닌 원시값이다.

따라서 빌트인 메서드 `toString()`을 사용할 수 없다.

## 2. null과 undefined, 그리고 객체의 타입 변환

#### Number

![image](https://github.com/user-attachments/assets/6201f14a-3220-4ac5-92f1-d05d05ab4172)

`null`는 **값이 없음**을 나타내는 특별한 값이어서 0으로 변환된다.

반면 `undefined`는 **값이 할당되지 않음**을 나타내기 때문에 `number`로 변환했을 때 유효한 숫자가 아닌 `NaN`이 된다.

`{}`과 `[]`이 다른 결과를 나타내는 이유는 타입 변환 시 자바스크립트가 `valueOf()`와 `toString()` 함수를 호출하기 때문이다.

1. 빈 객체 `{}` 의 경우

- `valueOf()`는 객체 자체를 반환합니다.
- `toString()`은 `"[object Object]"`를 반환합니다.
- `"[object Object]"`는 유효한 숫자로 변환될 수 없으므로, 결과는 `NaN`입니다.

2. 빈 배열 `[]` 의 경우:

- `valueOf()`는 배열 자체를 반환합니다.
- `toString()`은 빈 문자열 `""`를 반환합니다.
- 빈 문자열은 숫자로 변환될 때 `0`이 됩니다.

이런 규칙 때문에 비어있지 않은 배열의 경우에도 다른 결과가 발생한다.

```js
Number([1]); // 1
Number([1, 2]); // NaN
```

#### Booelan

![image](https://github.com/user-attachments/assets/40ffa881-365d-45c5-ac49-921fe269ffee)

`null`과 `undefined`는 "값이 없음" 또는 "정의되지 않음"을 나타내는 특별한 값입니다.

JavaScript는 이들을 "비어있음" 또는 "존재하지 않음"으로 취급하여 `falsy` 값으로 정의합니다.

반면 `{}` (빈 객체)와 `[]` (빈 배열)은 비록 내용물이 없더라도, 이들은 유효한 객체 또는 배열 구조를 가지고 있습니다.

JavaScript에서 모든 객체 (배열 포함)는 참조 타입이며, 그 자체로 "존재"하는 것으로 간주됩니다.

따라서 빈 객체와 빈 배열은 `truthy` 값으로 취급됩니다.

이러한 동작은 자바스크립트 언어 설계의 일부이며, 다음과 같이 개발자들이 **조건문에서 값의 존재 여부**를 쉽게 확인할 수 있게 합니다.

```js
if (someObject) {
  // someObject가 null이나 undefined가 아니라면 이 블록이 실행됩니다.
}

if (someArray.length) {
  // someArray가 비어있지 않다면 이 블록이 실행됩니다.
}
```

# 반복문

## 1. do ... while

웹 개발에서 `do-while` 문을 사용하는 경우는 상대적으로 드물지만 특정 상황에서는 유용하게 사용할 수 있다.

`do-while` 문은 조건을 먼저 검사하는 `while` 문과는 달리, 블록 내의 코드가 최소한 한 번은 실행된다는 점에서 차별화됩니다.

따라서 주어진 조건이 반복문이 시작되기 전에 만족하지 않아도 블록이 한 번 실행되어야 하는 **사용자 로그인**과 같은 경우에 적합합니다.

**do-while**

```js
let isAuthenticated;

do {
  const username = prompt("Enter your username:");
  const password = prompt("Enter your password:");
  isAuthenticated = authenticate(username, password); // 인증 함수, 로그인 성공시 true 반환

  if (!isAuthenticated) {
    alert("Invalid username or password. Please try again.");
  }
} while (!isAuthenticated);

alert("Welcome, " + username + "!");
```

**while**

```js
let isAuthenticated = false; // 초기값을 false로 설정하여 첫 번째 반복이 실행되도록 함
let username, password;

while (!isAuthenticated) {
  username = prompt("Enter your username:");
  password = prompt("Enter your password:");
  isAuthenticated = authenticate(username, password); // 인증 함수, 로그인 성공시 true 반환

  if (!isAuthenticated) {
    alert("Invalid username or password. Please try again.");
  }
}

alert("Welcome, " + username + "!");
```

`while`문을 사용하면 조건문을 먼저 통과해야 `authenticate` 함수가 실행되기 때문에 변수의 초기화가 필요한 것을 볼 수 있습니다.

# 단축 평가

## 1. && 연산자와 옵셔널 체이닝 연산자

#### && 연산자

`&&` 연산자는 좌항의 피연산자가 `falsy` 값이면 좌항의 피연산자를 반환한다.

```js
var elem = null;

var value = elem && elem.value; // null
```

#### ?. 연산자

옵셔널 체이닝 연산자 `?.`는 좌항의 피연산자가 `falsy` 값이라도 `null` 또는 `undefined`가 아닌 경우 우항의 참조를 이어간다.

```js
var str = "";

var length = str?.length;
console.log(length); // 0
```

---

#### && 연산자 사용 예시

```js
function greet(user) {
  // user 객체가 존재하고 name 속성이 있을 때만 환영 메시지 출력
  user && user.name && console.log(`환영합니다, ${user.name}님!`);
}

greet({ name: "Alice" }); // 출력: 환영합니다, Alice님!
greet({}); // 아무것도 출력하지 않음
greet(null); // 아무것도 출력하지 않음
```

이 예시에서 `&&`연산자는 `user` 객체와 `user.name`이 존재할 때만 콘솔에 메시지를 출력합니다.

#### ?. 연산자 사용 예시

```js
function getCompanyName(user) {
  // user의 company 객체가 존재하지 않아도 에러 없이 undefined 반환
  return user?.company?.name;
}

const user1 = {
  name: "Alice",
  company: { name: "Tech Corp" },
};

const user2 = {
  name: "Bob",
  // company 속성 없음
};

console.log(getCompanyName(user1)); // 출력: "Tech Corp"
console.log(getCompanyName(user2)); // 출력: undefined
console.log(getCompanyName(null)); // 출력: undefined
```

이 예시에서 옵셔널 체이닝 연산자는 `user` 객체나 `company` 객체가 없어도 안전하게 `name` 속성에 접근을 시도합니다.

---

#### 주요 차이점

1. `&&`연산자는 `falsy` 값을 만나면 평가를 중단하고 그 값을 반환하지만, `?.` 연산자는 `null` 또는 `undefined`일 때만 `undefined`를 반환합니다.

2. `&&`연산자는 **조건부 실행**에 더 적합하고, `?.` 연산자는 **객체의 속성에 안전하게 접근하는 데** 더 적합합니다.

3. `?.` 연산자를 사용하면 코드가 더 간결해지고 가독성이 향상될 수 있습니다, 특히 **깊이 중첩된 객체 구조**를 다룰 때 유용합니다.

## 2. || 연산자와 null 병합 연산자

#### || 연산자

`||` 연산자는 좌항의 피연산자가 `falsy` 값이면 우항의 피연산자를 반환한다.

이를 함수 매개변수에 기본값을 설정할 때 활용할 수 있다.

```js
function getStringLenth(str) {
  str = str || "";
  return str.length;
}

getStringLength(); // 0
getStringLength("hi"); // 2
```

`getStringLength()` 함수를 인자 없이 사용하게 되면 `str` 매개변수에는 `undefined`가 할당된다.

이 때 함수 내에서 `||` 연산자를 사용해 `str`에 `undefined` 대신 빈 문자열 `''`를 할당하여 Uncaught TypeError를 방지할 수 있다.

```js
function getStringLenth(str = "") {
  return str.length;
}
```

또는 위와 같이 ES6의 매개변수 기본값 설정을 이용할 수 있다.

#### ?? 연산자

`null` 병합 연산자 `??`는 좌항의 피연산자 `falsy` 값이라도 `null` 또는 `undefined`가 아니라면 좌항의 피연산자를 그대로 반환한다.

```js
var foo = "" || "default string";
console.log(foo); // "default string";
```

위와 같이 `Falsy` 값이 아닌 `0`이나 `''`도 기본값으로서 유효하다면 예기치 않은 동작이 발생할 수 있다.

이 때 `??`를 사용하면 된다.

```js
var foo = "" ?? "default string";
console.log(foo); // ""
```

#### 주요 차이점

- `||`연산자는 `falsy` 값을 모두 대체하지만, `??`연산자는 `null`과 `undefined`만 대체합니다.

- `??`연산자를 사용하면 `0`이나 빈 문자열(`''`)을 유효한 값으로 처리할 수 있습니다.

- `||`연산자는 불리언 로직에 더 가깝고, `??`연산자는 값의 존재 여부를 확인하는 데 더 특화되어 있습니다.

#### 실제 사용 시 고려사항

- 사용자 입력이나 설정 값을 다룰 때 `??`연산자가 더 안전할 수 있습니다. 예를 들어, 사용자가 의도적으로 `0`이나 빈 문자열을 입력했을 때 이를 유효한 값으로 처리해야 할 경우 `??`연산자가 적합합니다.

- 불리언 로직이나 `truthy`/`falsy` 개념에 기반한 로직에서는 `||`연산자가 여전히 유용할 수 있습니다.

## 생성자 함수

생성자 함수란 `new` 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다.

#### 객체 리터럴에 의한 객체 생성 방식의 문제점

```js
const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};
```

객체 리터럴에 의해 객체를 생성하는 경우 프로퍼티 구조가 동일함에도 불구하고 매번 같은 프로퍼티와 메서드를 기술해야 한다.

#### 생성자 함수에 의한 객체 생성 방식의 장점

```js
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);
```

객체를 생성하기 위한 템플릿 처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성할 수 있다.

생성자 함수 내부의 [[this]]는 생성자 함수가 생성할 인스턴스를 가리킨다.

#### 생성자 함수의 인스턴스 생성 과정

생성자 함수의 역할은 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화하는 것이다.

자바스크립트 엔진은 생성자 함수 내에서 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.

**1. 인스턴스 생성과 this 바인딩**

암묵적으로 빈 객체(인스턴스)가 생성되고 this에 바인딩된다.

**2. 인스턴스 초기화**

this에 바인딩되어 있는 인스턴스에 프로퍼티나 메서드를 추가하고

생성자 함수가 인수로 전달받은 초기값을 인스턴스 프로퍼티에 할당한다.

**3. 인스턴스 반환**

생성자 함수 내에서 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this를 **암묵적**으로 반환한다.

```js
function Circle(radius) {
  // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩된다.

  // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환한다.
}

const circle = new Circle(1);
console.log(circle); // Circle {radius: 1, getDiameter: ƒ}
```

만약 `this`가 아닌 다른 객체를 명시적으로 반환하면 `this`가 반환되지 못하고 `return`문에 명시한 객체가 반환된다.

명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 `this`가 반환된다.

> 생성자 함수 내부에서 `return` 문을 반드시 생략해야 한다.

## this

this는 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수다.

this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.

<table>
<tbody>
<tr>
<th>
함수 호출 방식
</th>
<th>
this가 가리키는 값
</th>
</tr>
<tr>
<td>
일반 함수로서 호출
</td>
<td>
전역 객체
</td>
</tr>
<tr>
<td>
메서드로서 호출
</td>
<td>
메서드를 호출한 객체(마침표 앞의 객체)
</td>
</tr>
<tr>
<td>
생성자 함수로서 호출
</td>
<td>
생성자 함수가 (미래에) 생성할 인스턴스
</td>
</tr>
</tbody>
</table>

```js
function foo() {
  console.log(this);
}

// 일반적인 함수로서 호출
foo(); // window

const obj = { foo };

// 메서드로서 호출
obj.foo(); // obj

// 생성자 함수로서 호출
const inst = new foo(); // inst
```

## 함수와 일반 객체의 차이점

#### 내부 슬롯과 내부 메서드

함수 객체는 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드는 물론

함수로서 동작하기 위한 `[[Environment]]`, `[[FormalParameters]]` 등의 내부 슬롯과 함께

함수가 일반 함수로서 호출될 때의`[[Call]]`과 new 연산자와 함께 생성자 함수로서 호출될 때의 `[[Construct]]` 내부 메서드를 가지고 있다.

함수 객체는 `[[Call]]`, `[[Construct]]` 내부 메서드를 가지고 있는 여부에 따라 callable, constructor, non-constructor로 나누어진다.

> 일반 객체는 호출될 수 없지만 모든 함수 객체는 호출이 가능한 callable이다.

#### constructor와 non-contstuctor의 구분

![image](https://github.com/user-attachments/assets/04b65333-0f6a-47d3-bc52-3bff2e48c8e8)
함수 객체는 생성자 함수로서 호출될 수 있는지에 따라 non-constructor과 constructor로 구분된다.

- constructor: 함수 선언문, 함수 표현식, 클래스
- non-constructor: ES6 메서드 축약 표현으로 정의된 메서드, 화살표 함수

constructor는 new 연산자를 붙여 호출하면 생성자 함수처럼 동작하는 반면 non-constructor는 에러가 발생한다.

```js
const arrow = () => {};

new arrow(); // TypeErorr: arrow is not a constructor

const obj = {
  x() {},
};

new obj.x(); // TypeError: obj.x is not a constructor
```

## new 연산자

constructor인 함수에 new 연산자를 사용해 호출하면 `[[Call]]`이 호출되는 것이 아니라 `[[Construct]]`가 호출된다.

```js
function add(x, y) {
  return x + y;
}

let inst = new add();

// 함수가 객체를 반환하지 않았으므로 반환문이 무시되고 빈 객체가 반환된다.
console.log(inst); // {}
```

반대로 new 연산자 없이 생성자 함수를 호출하면 `[[Construct]]` 대신 `[[Call]]`이 호출된다.

```js
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return this.radius * 2;
  };
}

// new 연산자 없이 호출
const circle = Circle(5);

// return하는 값이 없다.
console.log(circle); // undefined

// 일반함수 내부의 this는 전역 객체 window를 가리킨다.
console.log(radius); // 5
console.log(getDiameter()); // 10

circle.getDiameter(); // TypeError: Cannot read property 'getDiameter' of undefined=
```

#### new.target

생성자 함수가 new 연산자 없이 호출되는 경우를 대비하기 위한 메타 프로퍼티이다.

new.target은 new 연산자와 함께 생성자 함수로서 호출되면 함수 자신을,

일반 함수로서 호출되면 undefined가 된다.

```js
function Circle(radius) {
	// 일반 함수로 호출 시 new 연산자를 붙여 재귀 호출
	if (!new.target) {
		return new Circle(radius);
	}
	this.radius = radius;
	this.getDiameter = function () {
		return this.radius * 2
	};
}

const circle = Circle(5);
console.log(circle.getDiameter())); // 10
```

또는 일반 함수로 호출 시 내부의 this가 미래에 생성될 객체가 아닌 전역 객체 window를 가리킨다는 점을 이용하는 스코프 세이프 생성자 패턴을 사용할 수도 있다.

```js
function Circle(radius) {
	// 일반 함수로 호출 시 new 연산자를 붙여 재귀 호출
	if (!(this instanceof Circle)) {
		return new Circle(radius);
	}
	this.radius = radius;
	this.getDiameter = function () {
		return this.radius * 2
	};
}

const circle = Circle(5);
console.log(circle.getDiameter())); // 10
```

#### 빌트인 생성자 함수와 new

Object와 Function 생성자 함수는 new 연산자 없이 호출해도 new 연산자와 함께 호출했을 때와 같이 객체를 생성하여 반환한다.

하지만 String, Number, Boolean 생성자 함수는 new와 함께 호출했을 때는 객체를, 일반함수로서 호출했을 때는 문자열, 숫자, 불리언 값을 반환한다.

이를 통해 타입을 변환하기도 한다.

```js
const obj = new String(123);

console.log(obj); // String {'123'}

const str = String(123);

console.log(str, typeof str); // 123 string
```

# 프로토타입

## 1. 이해

모든 객체는 프로토타입을 가지고 있다. (최상위 프로토타입 제외)

프로토타입은 `constructor` 프로퍼티를 통해 생성자 함수에 접근할 수 있다.

즉, 모든 객체는 프로토타입과 생성자 함수를 가지고 있다.

![image](https://github.com/user-attachments/assets/663baedc-fbd5-4a2e-b9c1-82d08e377935)

객체는 `__prototype__` 프로퍼티를 통해 프로토타입에 접근할 수 있다.

`__prototype__` 프로퍼티는 최상위 객체 Object.prototype에서 상속받는다.

(`Object.create(null)`로 생성된 객체는 `__prototype__`을 상속받지 못한다.)

`__prototype__` 프로퍼티를 사용하면 순환참조하는 프로토타입 체인이 만들어질 위험이 있어

`setPrototypeOf()`, `getPrototypeOf()` 메서드를 사용하는 것이 권장된다.

---

함수는 **constructor**(생성자 함수)과 **non-constructor**(화살표 함수, 축약 표현으로 정의한 메서드)로 나누어진다.

생성자 함수는 `prototype` 프로퍼티를 가지고 이를 통해 프로토타입에 접근할 수 있다.

<img src="https://github.com/user-attachments/assets/f54c722f-8d6a-4e08-9239-9345dd17ab34" width="500px" />

사진에서 `me` 객체는 `Person.prototype`의 프로퍼티를 상속 받으므로 `me.constructor`는 `Person` 생성자 함수를 가리킨다.

---

생성자 함수에 의해 생성된 객체는 프로토타입과 생성자 함수를 가진다.

리터럴로 생성된 객체는 다음의 생성자 함수를 가진다.

![image](https://github.com/user-attachments/assets/f72e4acb-85e4-467f-9f46-c8f65a1a760f)

> 프로토타입과 생성자 함수는 단독으로 존재하지 않고 언제나 쌍으로 존재한다.

프로토타입은 생성자 함수가 생성되는 시점, 즉 함수 정의가 평가되어 함수 객체를 생성하는 시점에 함께 생성된다.

빌트인 생성자 함수는 전역 객체가 생성되는 시점에 생성된다.

> 객체가 생성되기 전에 생성자 함수와 프로토타입은 이미 객체화되어 존재한다. 이후 객체의 `[[Prototype]]` 내부 슬롯에 할당된다.

## 2. 프로토타입 체인

자바스크립트는 객체의 프로퍼티에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티가 없다면 `[[Prototype]]` 내부슬롯의 참조에 따라 상위 프로토타입을 순차적으로 검색한다.

프로토타입 체인의 종점은 Object.prototype이며, Object.prototype에서도 프로퍼티를 검색할 수 없는 경우 undefined를 반환한다.

> 프로토타입 체인은 스코프 체인과 협력하여 식별자와 프로퍼티를 검색한다.

```js
me.hasOwnProperty("name");
```

1. 스코프 체인에서 me를 검색한다. (전역 스코프에서 me가 검색된다.)

2. me 객체의 프로토타입 체인에서 hasOwnProperty 메서드를 검색한다. (Object.prototype에서 검색된다.)

## 3. 오버라이딩과 프로퍼티 섀도잉

```js
const Person = function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  // 생성자 함수를 반환
  return Person;
};

const me = new Person("Lee");

// 인스턴스 메서드
me.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};

// 프로토타입 메서드가 인스턴스 메서드에 의해 가려진다.
me.sayHello(); // Hey! My name is Lee
```

프로토타입 메서드는 인스턴스 메서드에 의해 섀도잉되고, 인스턴스 메서드는 프로퍼티 메서드를 오버라이딩 한다.

```js
delete me.sayHello;
me.sayHello(); // Hi! My name is Lee
```

프로퍼티 삭제 시 인스턴스 프로퍼티가 삭제된다.

```js
delete Person.prototype.sayHello;
```

프로토타입의 프로퍼티를 변경 또는 삭제하려면 프로토타입에 직접 접근해야한다.

```js
function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

const parent = {
  constructor: person,
  sayHello() {
    console.log(`Hi!, my name is ${this.name}`);
  },
};

Person.prototype = parent;

Object.setPrototypeOf(me, parent);
me.sayHello();
```

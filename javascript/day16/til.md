# this

## 1. 화살표 함수 내의 this

화살표 함수 내의 this는 호출되는 시점이 아니라 코드를 작성하는 시점, 즉 선언 시점에 결정된다.

이를 전문 용어로 렉시컬 바인딩이라고 한다.

화살표 함수의 this에는 함수 상위 스코프에 있는 this가 지정된다.
![alt text](image.png)

```js
let obj = {
    data: 40;

    fun1: function() {
        console.log(this.data) // 40
    }

    fun2: () => {
        // 전역 객체 window에 바인딩된다.
        console.log(this.data) // undefined
    }
}
```

# bind, apply, call

- bind : 함수가 특정 객체를 가리키게 한다.

- apply, call: 함수에 객체를 바인딩 후 함수를 호출한다. 함수에 전달하는 매개변수를 받는 방식에 차이가 있다.

- 생성자 함수, 또는 어느 객체에 바인딩 되어 실행될 함수가 아닌 이상 함수 내에 this는 안 쓰는 게 좋다.

```js
let obj1 = {
  name: "홍길동",
};

let sayHello = function () {
  console.log(`Hello, ${this.name}`);
};

// TypeError: Cannot read properties of undefined (reading 'name')
// sayHello();

// 함수를 obj 객체 안에 선언된 것 처럼 바인딩
let newFun = sayHello.bind(obj1);
newFun(); // Hello, 홍길동

let sayHello1 = function (arg1, arg2) {
  console.log(`Hello, ${this.name}, ${arg1}, ${arg2}`);
};

sayHello1.call(obj1, 10, 20); // Hello, 홍길동, 10, 20
sayHello1.apply(obj1, [10, 20]); // Hello, 홍길동, 10, 20
```

이를 이용해 객체의 메서드를 구현할 때 이미 구현되어 있는 함수를 이용할 수 있다.

```js
let myArray2 = {
  0: "orange",
  1: "yellow",
  2: "green",
  length: 3,
  push: function (e) {
    Array.prototype.push.call(this, e);
  },
  pop: function () {
    return Array.prototype.pop.call(this);
  },
  shift: function (e) {
    return Array.prototype.shift.call(this);
  },
};

myArray2.push("black");
myArray2.push("white");
console.log(myArray2.shift());
console.log(myArray2.pop());
console.log(myArray2);
```

# getter, setter

객체 안의 변수에 직접 접근하는 대신 set, get 예약어를 사용한 메서드를 이용해 값을 얻거나 변경할 수 있다.

- 특정한 사용자만 변수에 접근할 수 있을 때

- 변수에 접근한 로그를 얻어야 할 때

```js
let obj = {
  _num: 10,
  get num() {
    return this._num;
  },
  set num(value) {
    console.log("값 변경을 시도합니다.");
    this._num = value;
  },
};

obj.num = 20; // 값 변경을 시도합니다
console.log(obj.num); // 20
```

# 클래스

## 1. 선언 및 생성

```js
class User {
  name = "홍길동";
  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}

let obj = new User();
obj.sayHello(); // Hello, 홍길동
```

## 2. 생성자

객체 생성시 호출되어 클래스의 프로퍼티, 메서드를 메모리에 할당한다.

클래스 내에 명시적으로 생성자를 선언하지 않았다면 자동으로 기본 생성자가 추가된다.

기본 생성자는 매개변수를 가지지 않는다.

한 클래스 내는 하나의 생성자만 가질 수 있다.

## 3. 객체 멤버

프로퍼티는 생성자 내에서 this.프로퍼티명 형태로 선언하고 메서드는 생성자 외부 클래스 영역에 선언한다.

메서드를 선언식으로 선언하면 prototype에, 표현식으로 선언하면 객체에 따로 가지게 된다.

## 4. private 멤버

접근제한자는 멤버의 이용 범위를 제한한다.

자바스크립트는 접근제한자를 제공하지 않는다.

대신 클래스 내부의 멤버 앞에 #을 붙여 클래스 외부에서 사용하지 못하게 할 수 있다.

private 멤버를 사용하면 외부와의 결합도가 낮아져 유지보수성이 증가한다.

## 5. static 멤버

멤버는 객체 멤버와 static 멤버로 구분된다.

객체 멤버는 인스턴스 생성시 마다 메모리에 할당이 된다.

객체별 메모리 할당이 필요하지 않는 멤버에 static 키워드를 붙여주면 클래스 생성자에서 멤버에 바로 접근할 수 있다.

```js
class MyClass {
  data1 = 10;
  static data2 = 20;
  myFun1() {
    console.log(`myFun1 call... ${this.data1} ${this.data2}`);

  static myFun2() {
    console.log(`myFun2 call... ${this.data1} ${this.data2}`); // myFUn2 call... undefined 20
  }
  }
}

MyClass.myFun2();
console.log(MyClass.data2); // 20
```

static 멤버 data2, myFun2는 객체 멤버와 따로 메모리에 할당이되어 객체 멤버를 이용할 수 없다.

```js
const obj = new MyClass();
console.log(obj.data2); // undefined
```

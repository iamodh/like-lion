# 클래스

## 1. 생성자

- 객체 생성시 생성자가 무조건 호출되어야 한다.

- 하위 생성자 호출 시, 상위 생성자는 무조건 호출되어야 한다.

```js
class Shape {
  data1;
}

class Rectangle extends Shape {
  data2;
}

let rect = new Rectangle();
rect.data1 = 10;
rect.data2 = 20;
```

rect 객체를 생성하면서 Rectangle이 실행되고, extend 키워드가 있기 때문에 Shape 생성자또한 실행된다.

두 생성자가 사용된 객체는 rect이므로 해당 메모리에 data1, data2가 같이 존재한다.

## 2. 상속

- #와함께 선언된 private member는 하위 클래스에서 사용할 수 없다.

- 반면 static 키워드로 선언된 멤버는 하위 클래스에서 접근할 수 있다.

- 하위 생성자 내부에서 super() 상위 생성자를 호출해야 한다. (생성자 생략 시 암묵적으로 설정된다.)

```js
class Super1 {
  constructor() {}
}

class Sub1 extends Super1 {
  constructor() {
    super();
  }
}

let obj1 = new Sub1();
```

## 3. 클래스 생성자의 역할

1. 상위 생성자를 호출한다.

2. 생성자 내에서 개발자의 코드를 실행한다. (서버 연동 등)

3. 자신 클래스의 멤버를 메모리에 할당한다.

## super

```js
// 상위 생성자 호출
class Super2 {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
}

class Sub2 extends Super2 {
  constructor(name, x, y, width, height) {
    super(name, x, y);
    this.width = width;
    this.height = height;
  }
}
```

super()로 상위 생성자를 호출하는 구문은 생성장 내에서 첫줄에 한 번만 작성할 수 있다.

상위에 선언된 멤버를 하위에서 동일 이름으로 재정의하는 것을 오버라이딩이라고 한다. (오버라이딩된 멤버는 상속이 되지 않는다.)

오버라이딩된 함수 대신 상위 클래스의 함수를 사용하고 싶을때도 super를 사용한다.

```js
class Shape2 {
  data = 10;
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
  calcArea() {
    console.log(`${this.name}의 면적을 계산합니다.`);
  }
}

class Rect2 extends Shape2 {
  data = 20;
  constructor(name, x, y, width, height) {
    super(name, x, y);
    this.width = width;
    this.height = height;
  }
  // 함수 오버라이드
  calcArea() {
    super.calcArea();
    console.log(`넓이는 ${this.width * this.height}`);
  }
}

let rect3 = new Rect2("사각형", 10, 10, 20, 20);
console.log(rect3.data); // 20
rect3.calcArea(); // 사각형의 면적을 계산합니다. 넓이는 400
```

# 클로저

함수가 선언되었을 때의 렉시컬 환경의 조합을 의미한다.

## 1. 실행 컨텍스트

함수의 실행 환경이며 함수가 실행되기 위한 정보를 가지는 객체

실행 컨텍스트는 함수 호출 순서대로 스택 구조로 유지된다.

<img src="https://github.com/user-attachments/assets/48d50f4a-34de-4011-82fa-689ed5030ec9" width=400px>

## 2. 렉시컬 환경과 클로저

함수가 선언되어 있는 위치(스코프)를 의미한다.

함수의 실행이 렉시컬 환경을 벗어났을 때 클로저가 생성된다. (주로 함수를 리턴했을 때)

![image](https://github.com/user-attachments/assets/c952f09d-557d-4645-b557-c1edf948682d)

innerFun이 호출되는 시점은 outerFun의 실행 컨텍스트가 소멸된 시점이다.

따라서 y에 관한 정보가 클로저에 담겨 innerFun이 y를 사용할 수 있게 한다.

## 3. 캡슐화

특정 데이터를 외부에서 접근하지 못하도록 하는 것

일반적으로 변수를 숨기고 함수를 통해서만 접근할 수 있도록 한다.


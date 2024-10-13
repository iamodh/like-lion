# 타입스크립트

## 1. 타입

- any

모든 타입의 데이터

- array

```ts
let a: number[] = [10, 20];
let b: Array<number> = [1, 2];
```

- void

함수의 리턴값에 사용되는 타입

아무것도 리턴하지 않는다.

```ts
const b = () => {} : void
```

- Union

여러 타입을 허용하고자 할 때

```ts
let c: number | string;
```

- 사용자 지정 타입

주로 객체에 사용된다.

```ts
let obj: { id: number; name: string };
```

- null

Union으로 nullable을 표시할 때 사용

```ts
var data6: number || null;
```

- never

함수의 리턴값에서 의미있는 값이 리턴되지 않거나 함수가 끝나지 않음을 표시

```ts
function error(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while (true) {}
}
```

#### Generic

변수의 선언 부분이 아니라 변수를 사용할 때 타입을 지정해서 사용하는 방법

```ts
function a<T>(arg: T[], arg2: T[]): T[] {
  return arg.concat(arg2);
}

let b = a<number>([10, 20], [30, 40]);
```

1. T라는 형식 타입을 지정
2. 함수의 매개변수나 리턴 값의 타입에 사용

#### typealias

type을 직접 만든다.

```ts
type MyType2 = { id: number; name: string };
let b: MyType2 = { id: 10, name: "hello" };
```

#### optional

생략가능한 데이터 표현

```ts
let c: { id: number; name?: string };
c = { id: 20 };
c = { id: 30, name: "hello" };
```

#### readonly

읽기 전용으로 사용해야하는 데이터

```ts
type MyType3 = { id: number; name?: string; readonly email: string };
```

#### tuple

배열 내부 요소의 타입과 순서를 지정

```ts
let d: [number, string];
d = [10, "hello"];
```

#### Intersectino Type

typealias 두 개 모두 만족하는 타입을 말한다.

```ts
type PersonTypeInter = PersonTypeA & PersonTypeB;
```

## 2. enum

어떤 변수가 가질 수 있는 값들을 (열거형 상수로) 고정하는 방법

```ts
enum Direction1 {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

let c1: Direction1 = Direction1.NORTH;
let c2: Direction1 = Direction1.EAST;

console.log(c1, c2); // 0 2
```

열거형 상수의 실제 값은 선언된 순서로 0부터 1씩 증가한다.

원한다면 열거형 상수에 해당하는 값을 지정할 수 있다.

```ts
enum Direction2 {
  NORTh = "north",
  SOUTH = "south",
  EAST = 30,
  WEST,
}

console.log(Direction2.EAST, Direction2.WEST); // 30 31
```

enum 값이 숫자이고 다음 enum의 값을 지정 안해주면 자동으로 1을 더하 값이 들어간다.

## 3. 인터페이스

#### 타입 지정

```ts
interface MyInterface {
  id: number;
  name: string;
}

let d1: MyInterface = { id: 10, name: "kim" };
```

#### 인터페이스 상속

```ts
interface MyInterface3 extends MyInterface {
  age: number;
}

let d2: MyInterface3 = { id: 20, name: "Lee", age: 10 };
```

#### 매개변수로 함수가 올 때 함수의 데이터 타입 지정

```ts
// number를 매개변수로 받아 number를 리턴하는 함수 인터페이스
interface MyFunType {
  (arg1: number): number;
}

function t1(argFun: MyFunType) {}

t1((no: number) => 10);
```

#### 클래스의 타입 지정

클래스내에 변수나 함수가 꼭 선언되도록 강제

```ts
interface MyClassInterface1 {
  data1: number;
  some1(): boolean;
}

interface MyClassInterface2 {
  data2: number;
  some2(): boolean;
}

class MyClass2 implements MyClassInterface1, MyClassInterface2 {
  data1: 10;
  data2: 20;
  some1(): boolean {
    return true;
  }
  some2(): boolean {
    return false;
  }
}
```

## 4. Access Modifier

클래스의 멤버 접근 범위를 제한하여 유지보수성을 높인다.

생성자 함수의 매개변수에 접근 제한자를 붙이면 멤버 변수가 된다. (typescript의 기능)

```ts
class SuperClass {
  constructor(
    public id: string,
    public age: number,
    protected address: string
  ) {}
  email: "a@a.com"; // public
  private phone = "1111";
  protected url: "http://google.com";
  some() {
    console.log(this.id, this.age, this.address);
  }
}

let superObj = new SuperClass("kim", 10, "seoul");
superObj.some();
```

## 5. 추상형

abstract 키워드를 가진 (미완성) 멤버를 가지는 클래스

하위 클래스를 제어하기 위해 사용된다.

추상 클래스로는 객체 생성이 불가능하다.

```ts
abstract class AbstractClass {
  abstract name: string;
  abstract some();
}
class AbstractSubClass extends AbstractClass {
  name: string;
  some() {}
}
```

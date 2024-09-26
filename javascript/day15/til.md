# Descriptor

객체 프로퍼티에 대한 정보를 나타낸다.

프토퍼티의 값, 값 변경(writable)이나 열거(enumerable), 설명자 수정(configurable) 가능 여부를 가지고 있는 객체이다.

변수를 선언 후 값 변경을 막을 때

```js
Object.defineProperty(obj, "ange", { writable: false });
```

# Object.create()

오브젝트 리터럴로 오브젝트를 생성하면 실제 Object.create()가 내부적으로 실행되거 객체를 생성한다.

```js
let obj {
    name: "홍길동",
    age: 20,
}
```

```js
let obj = Object.create(Object.prototype, {
  name: { value: "홍길동" },
  age: { value: 20 },
});
```

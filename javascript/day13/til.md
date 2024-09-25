# 생성자

객체의 모형을 정의하는 역할의 함수

```js
function User(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log(`${this.name}, Hello!`);
  };
}

let user1 = new User("donghwan", 28);

user1.sayHello(); // donghwan, Hello!
```

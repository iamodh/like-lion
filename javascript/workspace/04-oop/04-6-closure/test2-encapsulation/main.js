// function UserFunction() {
//   this.name = "홍길동";
//   this.age = 10;
// }

// let obj1 = new UserFunction();
// obj1.name = "김길동";
// obj1.age = 20;
// console.log(obj1.name, obj1.age);

// class UserClass {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let obj2 = new UserClass();
// obj2.name = "이길동";
// obj2.age = "30";
// console.log(obj2.name, obj2.age);

// 캡슐화
function UserFunction() {
  let name = "홍길동";
  let age = 10;

  this.getName = function () {
    // name의 렉시컬 스코프가 외부에서도 클로저에 의해 유지된다.
    return name;
  };

  this.setName = function (value) {
    name = value;
  };
  this.getAge = function () {
    // name의 렉시컬 스코프가 외부에서도 클로저에 의해 유지된다.
    return age;
  };

  this.setAge = function (value) {
    age = value;
  };
}

let obj1 = new UserFunction();
obj1.setName("김길동");
obj1.setAge(20);
console.log(obj1.getName(), obj1.getAge());

class UserClass {
  #name = "홍길동";
  #age = 10;

  getName() {
    return this.#name;
  }

  setName(value) {
    this.#name = value;
  }

  getAge() {
    return this.#age;
  }

  setAge(value) {
    this.#age = value;
  }
}

let obj2 = new UserClass();
obj2.setName("이길동");
obj2.setAge(30);
console.log(obj2.getName(), obj2.getAge());

class User {
  #name;
  age;
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  #myFun() {
    console.log("myFun call...");
  }

  sayHello() {
    console.log(`Hello, ${this.#name}, ${this.age}`);
    this.#myFun();
  }
}

let user = new User("홍길동", 20);
// user.#name = "김길동";
user.age = 30;

user.sayHello();
// user.#myFun();

class MyClass {
  data1 = 10;
  static data2 = 20;
  myFun1() {
    console.log(`myFun1 call... ${this.data1} ${this.data2}`);
  }

  static myFun2() {
    console.log(`myFUn2 call... ${this.data1} ${this.data2}`);
  }
}

MyClass.myFun2();
console.log(MyClass.data2);

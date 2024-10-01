class User {
  name = "홍길동";
  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}

let obj = new User();
obj.sayHello();

class User2 {
  name = "홍길동";
  constructor() {}

  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}

class User3 {
  name = "홍길동";
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}

let obj2 = new User3("김길동");
obj2.sayHello();

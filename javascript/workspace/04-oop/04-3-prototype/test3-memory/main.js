function User1(name) {
  this.name = name;

  this.sayHello = function () {
    console.log(`Hello, ${this.name}`);
  };
}

let user1 = new User1("홍길동");
let user2 = new User1("김길동");

user1.sayHello();
user2.sayHello();

console.log(user1.sayHello === user2.sayHello);

function User2(name) {
  this.name = name;
  User2.prototype.sayHello = function () {
    console.log(`Hello, ${this.name}`);
  };
}

let user3 = new User2("홍길동");
let user4 = new User2("김길동");

console.log(user3.sayHello === user4.sayHello);

function User(name) {
  this.name = name;
  User.prototype.point = 20;
  User.prototype.sayHello = function () {
    console.log(`Hello, ${this.name}, ${this.point}`);
  };
}

let user1 = new User("홍길동");
user1.sayHello();

let user2 = new User("김길동");
user2.point = 30;
user2.sayHello = function () {
  console.log(`안녕하세요, ${this.name}, ${this.point}`);
};

user2.sayHello();
console.log(user2);

function myFun(arg1, arg2) {
  console.log(arg1, arg2);
}

console.log(myFun.prototype);

function User(name, age, address) {
  this.name = name;
  User.prototype.age = age;
  User.prototype.address = address;
}

let user1 = new User("홍길동", 20, "seoul");
let user2 = new User("김길동", 20, "busan");
console.log(user1.name, user1.age, user1.address);

console.dir(user1);
console.dir(user2);

User.prototype.email = "a@a.com";

console.log(user1);

user1.age = 40;
console.log(user1.age, user1.__proto__.age);

function User(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function () {
    console.log(`${this.name}, Hello!`);
  };
}

let user1 = new User("donghwan", 28);

user1.sayHello();

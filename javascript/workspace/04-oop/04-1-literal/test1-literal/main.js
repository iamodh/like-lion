"ust strict";

let user = {
  name: "홍길동",
  age: 20,
  isMember: true,
  order: {
    productId: 2,
    count: 10,
  },

  sayHello: function () {
    console.log(`Hello, ${this.name}`);
  },

  sayHello1: function () {
    console.log(`Hello, ${this.name} - ${age}`);
  },

  sayHello2: () => {
    console.log(`Hello, ${this.name}`); // Hello, undefined
  },
};

console.log(user["sayHello"]);
user.sayHello();
user.sayHello2();

let name = "김길동";
let age = 30;

let user1 = {
  name,
  age,

  sayHello: function () {
    console.log(`Hello, ${this.name} - ${this.age}`);
  },
};

user1.sayHello();

user1["address"] = "Seoul";

console.log(user1.address);

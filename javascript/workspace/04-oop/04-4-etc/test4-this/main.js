function User1(arg1) {
  console.log(this);
  this.data = arg1;
  console.log(this);
}

let user1 = new User1("홍길동");

function User2(arg1, arg2) {
  this.name = arg1;
  this.age = arg2;

  this.sayHello = function () {
    console.log(`Hello ${this.name}, ${this.age}`);
  };
}

let user2 = new User2("홍길동", 20);
let user3 = new User2("김길동", 30);

user2.sayHello();
user3.sayHello();

function User3() {
  this.data = 20;
  this.fun1 = function () {
    console.log(this.data);
  };

  this.fun2 = () => {
    console.log(this.data);
  };
}

let user4 = new User3();
user4.fun1();
user4.fun2();

let obj = {
  data: 40,
  fun1: function () {
    console.log(this.data);
  },
  fun2: () => {
    console.log(this.data);
  },
};

obj.fun1();
obj.fun2();

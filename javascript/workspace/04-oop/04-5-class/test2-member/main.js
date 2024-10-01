class User {
  name;
  sayHello() {
    console.log();
    this.address = "서울";
    console.log(`Hello, ${this.name}, ${this.age}, ${this.address}`);
  }
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello2 = function () {
      console.log(`Hello2, ${this.name}, ${this.age}`);
    };
  }
}

let obj = new User("홍길동", 20);
obj.phone = "010123";
obj.sayHello();
obj.sayHello2();
console.log(obj.address, obj.phone);

const person = {
  firstName: "Donghwan",
  lastName: "Oh",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + " " + person.lastName); // Donghwan Oh

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
person.fullName = "Heegun Lee";
console.log(person); // {firstName: 'Heegun', lastName: 'Lee'}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor); // {enumerable: true, configurable: true, get: ƒ, set: ƒ}

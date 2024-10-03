class Shape {
  name = "도형";
  x = 0;
  y = 0;

  draw() {
    console.log(`${this.name}을 ${this.x}, ${this.y}에 그립니다.`);
  }
}

class Rect extends Shape {
  width = 0;
  height = 0;
}

let rect = new Rect();
rect.name = "사각형";
rect.x = 10;
rect.y = 10;
rect.width = 100;
rect.height = 100;
rect.draw();

// private, static 상속 관계

class Super {
  data1 = 10;
  #data2 = 20;
  static data3 = 30;
}

class Sub extends Super {
  static data4 = 40;
  subFun() {
    console.log(this.data1);
    // console.log(thid.#data2);
  }
}

let obj = new Sub();
obj.subFun();

console.log(Sub.data3);
console.log(Sub.data4);

// 생성자 연결 관계

class Super1 {
  constructor() {}
}

class Sub1 extends Super1 {
  constructor() {
    super();
  }
}

let obj1 = new Sub1();

// 상위 생성자 호출
class Super2 {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
}

class Sub2 extends Super2 {
  constructor(name, x, y, width, height) {
    super(name, x, y);
    this.width = width;
    this.height = height;
  }
}

let obj2 = new Sub2("rect2", 20, 20, 200, 200);

// override

class Shape2 {
  data = 10;
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
  }
  calcArea() {
    console.log(`${this.name}의 면적을 계산합니다.`);
  }
}

class Rect2 extends Shape2 {
  data = 20;
  constructor(name, x, y, width, height) {
    super(name, x, y);
    this.width = width;
    this.height = height;
  }
  // 함수 오버라이드
  calcArea() {
    super.calcArea();
    console.log(`넓이는 ${this.width * this.height}`);
  }
}

let rect3 = new Rect2("사각형", 10, 10, 20, 20);
console.log(rect3.data); // 20
rect3.calcArea(); // 사각형의 면적을 계산합니다. 넓이는 400

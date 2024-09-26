"use strict";

// 모든 도형에 공통으로 들어가는 멤버
function Shape(name) {
  // 객체 생성 시점에 자동으로 만들어지는 객체를 지칭
  this.name = name;
}

Shape.prototype.draw = function () {
  // 함수를 호출한 객체를 지칭
  console.log(`${this.name} 그림을 그립니다.`);
};

function Rectangle(name, width, height) {
  // 상위 생성자 함수에 있는 name 프로퍼티를 상속받는다.
  Shape.apply(this, [name]);

  // 매개변수가 객체 여러개에 공통 값인가? => prototype
  // 또는 객체별로 다르게 유지되어야 하는가? => this
  this.width = width;
  this.height = height;
}

let rect1 = new Rectangle("rect1", 100, 200);
console.log(rect1.name, rect1.width, rect1.height); // rect1 100 200

// 상위 prototype까지 상속되지는 않는다.
//rect1.draw()

// 생성자의 prototype까지 사용
Rectangle.prototype = new Shape(); // prototype 교체
Rectangle.prototype.calcArea = function () {
  console.log(`area: ${this.width * this.height}`);
};

let rect2 = new Rectangle("rect2", 100, 200);
console.log(rect2.name, rect2.width, rect2.height);
rect2.draw(); // rect2 그림을 그립니다.
rect2.calcArea(); // area: 20000

console.log(rect2);
// this - name, width, height
// prototype - name, calcArea
// prototype - prototype - draw

Rectangle.prototype = Shape.prototype;
Rectangle.prototype.calcArea = function () {
  console.log(`area: ${this.width * this.height}`);
};

let rect3 = new Rectangle("rect3", 100, 200);
console.log(rect3.name, rect3.width, rect3.height);
rect3.draw(); // rect3 그림을 그립니다.
rect3.calcArea(); // area: 20000

console.log(rect3);
// this - name, width, height
// prototype - name, calcArea, draw

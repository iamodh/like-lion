"use strict";

function User() {}
let user1 = new User();

console.log(typeof 10);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof User);
console.log(typeof [10, 20]);
console.log(typeof user1);

console.log(10 instanceof Number); // false
console.log(new Number(10) instanceof Number); // true

function Car() {}

console.log(user1 instanceof User);
console.log(user1 instanceof Car);

function Shape() {}
function Rectangle() {}
Rectangle.prototype = Shape.prototype;

let shape = new Shape();
let rect = new Rectangle();
console.log(shape instanceof Shape);
console.log(shape instanceof Rectangle);
console.log(rect instanceof Shape);
console.log(rect instanceof Rectangle);

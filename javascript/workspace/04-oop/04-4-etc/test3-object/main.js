let user1 = {
  name: "홍길동",
  age: 20,
};

console.log(user1);
console.dir(user1);

let user2 = Object.create(
  Object.create(Object.prototype, {
    name: { value: "홍길동" },
    age: { value: 20 },
  })
);

console.log(user2);
console.dir(user2);

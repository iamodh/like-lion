"use strict";
class Message {
  constructor(sender, text) {
    this.sender = sender;
    this.text = text;
    this.createdAt = new Date().toLocaleString();
  }
  display() {
    const li = document.createElement("li");
    const date = document.createElement("span");
    li.textContent = `${this.sender}: ${this.text}`;
    date.textContent = this.createdAt;
    li.appendChild(date);
    messageList.appendChild(li);
  }
}
const names = ["Alice", "Bob", "Charlie", "David"];
const texts = ["Hello!", "Hi!", "Goodbye!", "Bye!"];
const messageList = document.querySelector("#message-list");

const message = {
  sender: "",
  text: "",
  createdAt: new Date().toLocaleString(),
  display() {
    const li = document.createElement("li");
    const date = document.createElement("span");
    li.textContent = `${this.sender}: ${this.text}`;
    date.textContent = this.createdAt;
    li.appendChild(date);
    messageList.appendChild(li);
  },
};
// message 객체의 sender, text, createdAt 프로퍼티에 값을 할당하고 display 메소드를 호출하여 메시지를 출력한다.
// message.sender = "Alice";
// message.text = "Hello!";
// message.display();

// message.sender = "Bob";
// message.text = "Hi!";
// message.display();

// message.sender = "Charlie";
// message.text = "Goodbye!";
// message.display();

// message.sender = "David";
// message.text = "Bye!";
// message.display();
(() => {
  for (let i = 0; i < 8; i++) {
    message.sender = names[i % 4];
    message.text = texts[i % 4];
    message.display();
  }
})();

// Message class 사용.
(() => {
  for (let i = 0; i < 8; i++) {
    new Message(names[i % 4], texts[i % 4]).display();
  }
})();
console.log(message);
console.log(new Message("Alice", "Hello!"));

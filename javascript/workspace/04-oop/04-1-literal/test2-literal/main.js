const message = {
  meta: {
    user: "12.장유진",
    profileURL: "snowman.jpg",
  },
  content: "디버깅 용도로 많이사용합니다",
  createdAt: new Date("2024-09-04T10:32:00"),
  reactions: [{ emoji: "👍", count: 2, reactBy: ["홍길동", "김길동"] }],

  printMessage: function () {
    console.log(this.meta.user, this.meta.profileURL);
    console.log(this.content);
    console.log(this.createdAt.toLocaleString());

    this.reactions.forEach((el) =>
      console.log(`${el.emoji}: ${el.count} - ${el.reactBy}`)
    );
  },
};

message.printMessage();

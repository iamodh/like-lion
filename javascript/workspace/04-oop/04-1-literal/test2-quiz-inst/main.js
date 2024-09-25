let message = {
  msg: "디버깅 용도로 많이 사용합니다.",
  date: "2024.09.04 오전 10:32",
  member: {
    id: "jangyj",
    nickname: "장유진",
    photo: "jangyj.png",
  },
  emojis: [
    {
      id: "thumbup",
      count: 3,
      members: ["a", "b", "c"],
      add: function (id) {
        this.count++;
        this.members.push(id);
      },
    },
  ],
  addEmoji: function (emojiId, memberId) {
    if (this.emojis.every((item) => item.id !== emojiId)) {
      this.emojis.push({
        id: emojiId,
        count: 1,
        members: [memberId],
        add: function (id) {
          this.count++;
          this.members.push(id);
        },
      });
    } else {
      let index = this.emojis.findIndex((item) => item.id === emojiId);
      this.emojis[index].add(memberId);
    }
  },
};

console.log(message);

message.addEmoji("thumbup", "kim");

console.log(message);

message.addEmoji("ok", "lee");

console.log(message);

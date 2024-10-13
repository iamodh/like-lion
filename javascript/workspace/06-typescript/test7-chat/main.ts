// function Member(id, nickname, photo) {
//   this.id = id;
//   this.nickname = nickname;
//   this.photo = photo;
// }

class Member {
  constructor(
    public id: string,
    public nickname: string,
    public photo: string
  ) {}
}
// function Emoji(emojiId) {
//   this.emojiId = emojiId;
//   this.count = 0;
//   this.members = [];
//   this.add = function (memberId) {
//     this.count++;
//     this.members.push(memberId);
//   };
// }

class Emoji {
  constructor(public emojiId: string) {}
  count: number = 0;
  members: Array<string> = [];
  add(memberId: string) {
    this.count++;
    this.members.push(memberId);
  }
}

// function Message(msg, member) {
//   // this.msgId = ++msgId;
//   this.msg = msg;
//   this.member = member;
//   this.date = new Date().toLocaleString();
//   this.emojis = [];
//   this.addEmoji = function (emojiId, memberId) {
//     if (this.emojis.every((item) => item.emojiId !== emojiId)) {
//       let emoji = new Emoji(emojiId);
//       emoji.add(memberId);
//       this.emojis.push(emoji);
//     } else {
//       let index = this.emojis.findIndex((item) => item.emojiId === emojiId);
//       this.emojis[index].add(memberId);
//     }
//   };
// }

class Message {
  constructor(public msg: string, public member: Member) {}
  msgId: number = 0;
  date: string = new Date().toLocaleString();
  emojis: Array<Emoji> = [];
  addEmoji(emojiId: string, memberId: string) {
    if (this.emojis.every((item) => item.emojiId !== emojiId)) {
      let emoji = new Emoji(emojiId);
      emoji.add(memberId);
      this.emojis.push(emoji);
    } else {
      let index = this.emojis.findIndex((item) => item.emojiId === emojiId);
      this.emojis[index].add(memberId);
    }
  }
}

let messages: Array<Message> = [];
// let msgId = 0;
let member: Member;
let webSocket: WebSocket;

let nicknameInputNode: HTMLInputElement = document.getElementById(
  "nicknameInput"
) as HTMLInputElement;
let idInputNode: HTMLInputElement = document.getElementById(
  "idInput"
) as HTMLInputElement;
let msgInputNode: HTMLInputElement = document.getElementById(
  "msgInput"
) as HTMLInputElement;
let chatMainNode: HTMLElement | null = document.getElementById("chat-main");

let nicknameForm: HTMLElement | null = document.getElementById("nicknameForm");
let msgForm: HTMLElement | null = document.getElementById("msgForm");

function printMessage(message: Message) {
  let menuImageNode: HTMLElement = document.createElement("img");
  menuImageNode.setAttribute("src", "./images/menu.jpg");

  let menuButtonNode: HTMLElement = document.createElement("button");
  menuButtonNode.setAttribute("class", "msg-info-menu dropbtn");
  menuButtonNode.appendChild(menuImageNode);

  let link1: HTMLElement = document.createElement("a");
  link1.setAttribute("href", "#");
  link1.setAttribute("onclick", `emojiClick('${message.msgId}', 'thumbup')`);
  link1.textContent = "좋아요";

  let link2: HTMLElement = document.createElement("a");
  link2.setAttribute("href", "#");
  link2.setAttribute("onclick", `emojiClick('${message.msgId}', 'ok')`);
  link2.textContent = "넵";

  let links: HTMLElement = document.createElement("div");
  links.setAttribute("class", "dropdown-content");
  links.appendChild(link1);
  links.appendChild(link2);

  let dropdown: HTMLElement = document.createElement("div");
  dropdown.setAttribute("class", "dropdown");
  dropdown.appendChild(menuButtonNode);
  dropdown.appendChild(links);

  let name: HTMLElement = document.createElement("div");
  name.setAttribute("class", "msg-info-name");
  name.textContent = message.member.nickname;

  let date: HTMLElement = document.createElement("div");
  date.setAttribute("class", "msg-info-time");
  date.textContent = message.date;

  let msgInfo: HTMLElement = document.createElement("div");
  msgInfo.setAttribute("class", "msg-info");
  msgInfo.appendChild(name);
  msgInfo.appendChild(date);
  msgInfo.appendChild(dropdown);

  let msgText: HTMLElement = document.createElement("div");
  msgText.setAttribute("class", "msg-text");
  msgText.textContent = message.msg;

  let msgBubble: HTMLElement = document.createElement("div");
  msgBubble.setAttribute("class", "msg-bubble");
  msgBubble.appendChild(msgInfo);
  msgBubble.appendChild(msgText);

  let photoNode: HTMLElement = document.createElement("img");
  photoNode.setAttribute("src", message.member.photo);
  photoNode.setAttribute("class", "msg-img");

  let mainNode: HTMLElement = document.createElement("div");
  mainNode.setAttribute("id", `msgId-${message.msgId}`);
  mainNode.setAttribute("class", "msg left-msg");
  mainNode.appendChild(photoNode);
  mainNode.appendChild(msgBubble);

  chatMainNode?.appendChild(mainNode);
}

function connect(e: MouseEvent) {
  e.preventDefault();

  let id: string = idInputNode.value;
  let nickname: string = nicknameInputNode.value;

  if (id.trim().length === 0 || nickname.trim().length === 0) {
    alert("아이디, 닉네임을 입력하세요");
    return;
  } else {
    idInputNode.value = "";
    nicknameInputNode.value = "";

    member = new Member(id, nickname, `images/${id}.jpg`);

    webSocket = new WebSocket("ws://localhost:3000");
    webSocket.onmessage = onMessage;
  }
}

function send(e: MouseEvent) {
  e.preventDefault();

  // let id = idInput.value;
  // let nickname = nicknameInputNode.value;
  let msg: string = msgInputNode.value;

  if (
    // id.trim().length === 0 ||
    // nickname.trim().length === 0 ||
    msg.trim().length === 0
  )
    alert("메시지를 입력해야 합니다.");
  else {
    // idInputNode.value = "";
    // nicknameInputNode.value = "";
    msgInputNode.value = "";
  }
  // let member = new Member(id, nickname, `./images/${id}.jpg`);

  let message: Message = new Message(msg, member);
  // messages.push(message);
  // printMessage(message);

  message["gubun"] = "msg";
  webSocket.send(JSON.stringify(message));
}

function printEmoji(message: Message) {
  let emojis: Array<Emoji> = message.emojis;
  if (emojis.length > 0) {
    let messageBubble: HTMLElement | null = document.querySelector(
      `#msgId-${message.msgId} .msg-bubble`
    );

    let emojiNode: HTMLElement | null | undefined =
      messageBubble?.querySelector(".emojis");
    if (emojiNode) {
      messageBubble?.removeChild(emojiNode);
    }

    let emojisNode: HTMLElement = document.createElement("div");
    emojisNode.setAttribute("class", "emojis");

    emojis.forEach((emoji: Emoji) => {
      let img: HTMLElement = document.createElement("img");
      img.setAttribute("class", "emoji dropbtn");
      img.setAttribute("src", `./images/${emoji.emojiId}.jpg`);

      let span: HTMLElement = document.createElement("span");
      let nicknameTxt: string = emoji.members.join(", ");
      span.textContent = nicknameTxt;

      let dropdownContent: HTMLElement = document.createElement("div");
      dropdownContent.setAttribute("class", "dropdown-content");
      dropdownContent.appendChild(span);

      let dropdown: HTMLElement = document.createElement("div");
      dropdown.setAttribute("class", "dropdown");
      dropdown.appendChild(img);
      dropdown.appendChild(dropdownContent);

      let span2: HTMLElement = document.createElement("span");
      span2.setAttribute("class", "emoji-count");
      span2.textContent = emoji.count + "";

      emojisNode.appendChild(dropdown);
      emojisNode.appendChild(span2);
    });

    messageBubble?.appendChild(emojisNode);
  }
}

function emojiClick(msgId: number, emojiId: string) {
  let emoji = new Emoji(emojiId);
  emoji["memberId"] = member.id;
  emoji["msgId"] = msgId;
  emoji["gubun"] = "emoji";

  webSocket.send(JSON.stringify(emoji));
}

function onMessage(event: MessageEvent) {
  let serverData: any = JSON.parse(event.data);
  if (serverData.gubun === "connect") {
    if (serverData.state === "ok") {
      nicknameForm?.setAttribute("style", "display: none");
      msgForm?.removeAttribute("style");
    } else {
      alert("서버 연결에 실패했습니다.");
    }
  } else if (serverData.gubun === "msg") {
    let message = new Message(serverData.msg, serverData.member);
    message.msgId = serverData.msgId;
    messages.push(message);
    printMessage(message);
  } else if (serverData.gubun === "emoji") {
    let index = messages.findIndex(
      (item) => item.msgId === parseInt(serverData.msgId)
    );

    messages[index].addEmoji(serverData.emojiId, serverData.memberId);
    printEmoji(messages[index]);
  }
}

// function Member(id, nickname, photo) {
//   this.id = id;
//   this.nickname = nickname;
//   this.photo = photo;
// }
var Member = /** @class */ (function () {
    function Member(id, nickname, photo) {
        this.id = id;
        this.nickname = nickname;
        this.photo = photo;
    }
    return Member;
}());
// function Emoji(emojiId) {
//   this.emojiId = emojiId;
//   this.count = 0;
//   this.members = [];
//   this.add = function (memberId) {
//     this.count++;
//     this.members.push(memberId);
//   };
// }
var Emoji = /** @class */ (function () {
    function Emoji(emojiId) {
        this.emojiId = emojiId;
        this.count = 0;
        this.members = [];
    }
    Emoji.prototype.add = function (memberId) {
        this.count++;
        this.members.push(memberId);
    };
    return Emoji;
}());
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
var Message = /** @class */ (function () {
    function Message(msg, member) {
        this.msg = msg;
        this.member = member;
        this.msgId = 0;
        this.date = new Date().toLocaleString();
        this.emojis = [];
    }
    Message.prototype.addEmoji = function (emojiId, memberId) {
        if (this.emojis.every(function (item) { return item.emojiId !== emojiId; })) {
            var emoji = new Emoji(emojiId);
            emoji.add(memberId);
            this.emojis.push(emoji);
        }
        else {
            var index = this.emojis.findIndex(function (item) { return item.emojiId === emojiId; });
            this.emojis[index].add(memberId);
        }
    };
    return Message;
}());
var messages = [];
// let msgId = 0;
var member;
var webSocket;
var nicknameInputNode = document.getElementById("nicknameInput");
var idInputNode = document.getElementById("idInput");
var msgInputNode = document.getElementById("msgInput");
var chatMainNode = document.getElementById("chat-main");
var nicknameForm = document.getElementById("nicknameForm");
var msgForm = document.getElementById("msgForm");
function printMessage(message) {
    var menuImageNode = document.createElement("img");
    menuImageNode.setAttribute("src", "./images/menu.jpg");
    var menuButtonNode = document.createElement("button");
    menuButtonNode.setAttribute("class", "msg-info-menu dropbtn");
    menuButtonNode.appendChild(menuImageNode);
    var link1 = document.createElement("a");
    link1.setAttribute("href", "#");
    link1.setAttribute("onclick", "emojiClick('".concat(message.msgId, "', 'thumbup')"));
    link1.textContent = "좋아요";
    var link2 = document.createElement("a");
    link2.setAttribute("href", "#");
    link2.setAttribute("onclick", "emojiClick('".concat(message.msgId, "', 'ok')"));
    link2.textContent = "넵";
    var links = document.createElement("div");
    links.setAttribute("class", "dropdown-content");
    links.appendChild(link1);
    links.appendChild(link2);
    var dropdown = document.createElement("div");
    dropdown.setAttribute("class", "dropdown");
    dropdown.appendChild(menuButtonNode);
    dropdown.appendChild(links);
    var name = document.createElement("div");
    name.setAttribute("class", "msg-info-name");
    name.textContent = message.member.nickname;
    var date = document.createElement("div");
    date.setAttribute("class", "msg-info-time");
    date.textContent = message.date;
    var msgInfo = document.createElement("div");
    msgInfo.setAttribute("class", "msg-info");
    msgInfo.appendChild(name);
    msgInfo.appendChild(date);
    msgInfo.appendChild(dropdown);
    var msgText = document.createElement("div");
    msgText.setAttribute("class", "msg-text");
    msgText.textContent = message.msg;
    var msgBubble = document.createElement("div");
    msgBubble.setAttribute("class", "msg-bubble");
    msgBubble.appendChild(msgInfo);
    msgBubble.appendChild(msgText);
    var photoNode = document.createElement("img");
    photoNode.setAttribute("src", message.member.photo);
    photoNode.setAttribute("class", "msg-img");
    var mainNode = document.createElement("div");
    mainNode.setAttribute("id", "msgId-".concat(message.msgId));
    mainNode.setAttribute("class", "msg left-msg");
    mainNode.appendChild(photoNode);
    mainNode.appendChild(msgBubble);
    chatMainNode === null || chatMainNode === void 0 ? void 0 : chatMainNode.appendChild(mainNode);
}
function connect(e) {
    e.preventDefault();
    var id = idInputNode.value;
    var nickname = nicknameInputNode.value;
    if (id.trim().length === 0 || nickname.trim().length === 0) {
        alert("아이디, 닉네임을 입력하세요");
        return;
    }
    else {
        idInputNode.value = "";
        nicknameInputNode.value = "";
        member = new Member(id, nickname, "images/".concat(id, ".jpg"));
        webSocket = new WebSocket("ws://localhost:3000");
        webSocket.onmessage = onMessage;
    }
}
function send(e) {
    e.preventDefault();
    // let id = idInput.value;
    // let nickname = nicknameInputNode.value;
    var msg = msgInputNode.value;
    if (
    // id.trim().length === 0 ||
    // nickname.trim().length === 0 ||
    msg.trim().length === 0)
        alert("메시지를 입력해야 합니다.");
    else {
        // idInputNode.value = "";
        // nicknameInputNode.value = "";
        msgInputNode.value = "";
    }
    // let member = new Member(id, nickname, `./images/${id}.jpg`);
    var message = new Message(msg, member);
    // messages.push(message);
    // printMessage(message);
    message["gubun"] = "msg";
    webSocket.send(JSON.stringify(message));
}
function printEmoji(message) {
    var emojis = message.emojis;
    if (emojis.length > 0) {
        var messageBubble = document.querySelector("#msgId-".concat(message.msgId, " .msg-bubble"));
        var emojiNode = messageBubble === null || messageBubble === void 0 ? void 0 : messageBubble.querySelector(".emojis");
        if (emojiNode) {
            messageBubble === null || messageBubble === void 0 ? void 0 : messageBubble.removeChild(emojiNode);
        }
        var emojisNode_1 = document.createElement("div");
        emojisNode_1.setAttribute("class", "emojis");
        emojis.forEach(function (emoji) {
            var img = document.createElement("img");
            img.setAttribute("class", "emoji dropbtn");
            img.setAttribute("src", "./images/".concat(emoji.emojiId, ".jpg"));
            var span = document.createElement("span");
            var nicknameTxt = emoji.members.join(", ");
            span.textContent = nicknameTxt;
            var dropdownContent = document.createElement("div");
            dropdownContent.setAttribute("class", "dropdown-content");
            dropdownContent.appendChild(span);
            var dropdown = document.createElement("div");
            dropdown.setAttribute("class", "dropdown");
            dropdown.appendChild(img);
            dropdown.appendChild(dropdownContent);
            var span2 = document.createElement("span");
            span2.setAttribute("class", "emoji-count");
            span2.textContent = emoji.count + "";
            emojisNode_1.appendChild(dropdown);
            emojisNode_1.appendChild(span2);
        });
        messageBubble === null || messageBubble === void 0 ? void 0 : messageBubble.appendChild(emojisNode_1);
    }
}
function emojiClick(msgId, emojiId) {
    var emoji = new Emoji(emojiId);
    emoji["memberId"] = member.id;
    emoji["msgId"] = msgId;
    emoji["gubun"] = "emoji";
    webSocket.send(JSON.stringify(emoji));
}
function onMessage(event) {
    var serverData = JSON.parse(event.data);
    if (serverData.gubun === "connect") {
        if (serverData.state === "ok") {
            nicknameForm === null || nicknameForm === void 0 ? void 0 : nicknameForm.setAttribute("style", "display: none");
            msgForm === null || msgForm === void 0 ? void 0 : msgForm.removeAttribute("style");
        }
        else {
            alert("서버 연결에 실패했습니다.");
        }
    }
    else if (serverData.gubun === "msg") {
        var message = new Message(serverData.msg, serverData.member);
        message.msgId = serverData.msgId;
        messages.push(message);
        printMessage(message);
    }
    else if (serverData.gubun === "emoji") {
        var index = messages.findIndex(function (item) { return item.msgId === parseInt(serverData.msgId); });
        messages[index].addEmoji(serverData.emojiId, serverData.memberId);
        printEmoji(messages[index]);
    }
}

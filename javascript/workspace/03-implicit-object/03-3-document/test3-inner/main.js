// innerHTML vs innerText
let oneNode = document.getElementById("one");

console.log(oneNode.innerHTML);
console.log(oneNode.innerText);

let twoNode = document.getElementById("two");

console.log(twoNode.innerHTML);
console.log(twoNode.innerText);

let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");

result1.innerHTML = '<a href="#">google></a>';
result1.innerText = '<a href="#">google></a>';

// 속성 핸들링
let link1 = document.getElementById("link1");
console.log(link1.href);
console.log(link1.getAttribute("href"));

let link2 = document.getElementById("link2");
link2.href = "http://www.naver.com";
link2.setAttribute("href", "http://www.google.com");

let link3 = document.getElementById("link3");
link3.removeAttribute("href");
console.log(link3.hasAttribute("href"));

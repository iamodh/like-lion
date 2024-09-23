let area1 = document.getElementById("area1");
let area2 = document.getElementById("area2");
let area3 = document.getElementById("area3");

// event handler (bubbling)
area1.addEventListener("click", function () {
  console.log("bubbling area1 event handler");
});

area2.addEventListener("click", function () {
  console.log("bubbling area2 event handler");
});

// event handler (capturing)
area1.addEventListener(
  "click",
  function (e) {
    console.log("capturing area1 event handler");
    e.stopPropagation();
  },
  true
);

area3.addEventListener(
  "click",
  function (e) {
    console.log("capturing area3 event handler");
  },
  true
);

let link1 = document.getElementById("link1");
let form1 = document.getElementById("form1");

link1.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("link click");
});
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submit");
});

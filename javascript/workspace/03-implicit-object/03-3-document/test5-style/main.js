let area1 = document.getElementById("area1");
let area2 = document.getElementById("area2");
let area3 = document.getElementById("area3");

console.log(area1.style.width);
console.log(area2.style.width);
console.log(area3.style.width);

console.log(area1.style.height);
console.log(area1.style.backgroundColor);

area1.addEventListener("click", () => {
  area1.style.backgroundColor = "yellow";
  area1.style.borderRadius = "50%";
});

console.log(getComputedStyle(area1).width);
console.log(getComputedStyle(area2).width);
console.log(getComputedStyle(area3).width);

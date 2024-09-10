"use strict";

document.write(`<section>`);
for (let i = 1; i <= 9; i++) {
  document.write(`<div><h3>${i}단</h3>`);
  for (let j = 1; j <= 9; j++) {
    document.write(`<span>${i}X${j}=${i * j}</span><br/>`);
  }
  document.write(`</div>`);
}
document.write(`</section>`);

"use strict";

document.write(`<section>`);

let i = 1;

while (i <= 9) {
  document.write(`<div><h3>${i}단</h3>`);
  let j = 1;

  while (j <= 9) {
    document.write(`<span>${i}X${j}=${i * j}</span><br/>`);
    j++;
  }
  document.write(`</div>`);

  i++;
}
document.write(`</section>`);

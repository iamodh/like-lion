function Product(name, price) {
  this.name = name;
  this.price = price;
}

let products = [
  new Product("대뱃살", 3000),
  new Product("목살", 5000),
  new Product("배꼽살", 4000),
  new Product("중뱃살", 1000),
];

const $options = document.getElementById("options");
const $result = document.getElementById("result");

// js 파일 로드 시에 products를 화면에 표시
window.addEventListener("load", () => {
  products.forEach((item) => {
    const $option = document.createElement("option");
    $option.setAttribute("value", item.name);
    $option.textContent = `${item.name} - ${item.price}`;
    $options.appendChild($option);
  });
});

const selectProducts = function () {
  // 선택된 상품을 담는 배열
  let bag = [];

  const selectedProducts = [...$options.querySelectorAll("option:checked")];
  selectedProducts.forEach((product) => {
    // 선택된 product를 bag에 push한다.
    const index = products.findIndex((item) => item.name === product.value);
    bag.push(products[index]);
  });

  return bag;
};

// result에 bag 목록을 출력하는 함수
const printBag = function (bag) {
  const $h3 = document.createElement("h3");
  $h3.textContent = "선택한 상품";
  $result.appendChild($h3);

  bag.forEach((item) => {
    const $li = document.createElement("li");
    $li.textContent = `${item.name} - ${item.price}`;

    $result.appendChild($li);
  });
};

// total에 bag 목록의 총 가격을 출력한다.

const printTotal = function (bag) {
  const $total = document.getElementById("total");
  let total = 0;

  bag.forEach((item) => {
    total += item.price;
  });

  $total.textContent = `총액 : ${total}`;
};

$options.addEventListener("change", (e) => {
  $result.textContent = "";
  const bag = selectProducts();

  if (bag.length > 0) {
    printBag(bag);
    printTotal(bag);
  }
});

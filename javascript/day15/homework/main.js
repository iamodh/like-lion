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
const $total = document.getElementById("total");

// js 파일 로드 시에 products를 화면에 표시
window.addEventListener("load", () => {
  products.forEach((item) => {
    const $option = document.createElement("option");
    $option.setAttribute("value", item.name);
    $option.textContent = `${item.name} - ${item.price}`;
    $options.appendChild($option);
  });
});

$options.addEventListener("change", (e) => {
  let total = 0;
  $result.textContent = "";
  const selectedProducts = [...$options.querySelectorAll("option:checked")];
  selectedProducts.forEach((product) => {
    const $li = document.createElement("li");

    // result에 선택된 products 추가
    $li.textContent = product.innerText;
    $result.append($li);

    // total에 result의 products 가격 합 표시
    const index = products.findIndex((item) => item.name === product.value);
    total += products[index].price;
    $total.textContent = `총액: ${total}원`;
  });
});

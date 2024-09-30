"use strict";

function Product(name, price) {
  this.name = name;
  this.price = price;
}

const products = [
  new Product("대뱃살", 3000),
  new Product("목살", 5000),
  new Product("배꼽살", 4000),
  new Product("중뱃살", 1000),
];

let selectNode = document.getElementById("products");
let optionTxt = "";
products.forEach((item, index) => {
  optionTxt += `<option value="${index}">${item.name} - ${item.price}</option>`;
});
selectNode.innerHTML = optionTxt;

let result = document.getElementById("result");
let paymentPrice = 0;

function selectChange(e) {
  let values = e.target.selectedOptions;
  console.log(values);
  if (values.length !== 0) {
    let resultTxt = "<h4>선택한 상품</h4>";
    resultTxt += "<ul>";

    let totalPrice = 0;
    for (let i = 0; i < values.length; i++) {
      let product = products[values[i].value];
      resultTxt += `<li>${product.name} - ${product.price}</li>`;
      totalPrice += product.price;
    }

    resultTxt += "</ul>";
    resultTxt += `<h4>총액 : ${totalPrice}</h4>`;
    result.innerHTML = resultTxt;

    paymentPrice = totalPrice;
  } else {
    result.innerHTML = "";
    paymentPrice = 0;
  }
}

function payment() {
  if (paymentPrice === 0) {
    alert("결제할 상품을 선택해야 합니다.");
  } else {
    window.open(
      "payment.html",
      "_blank",
      "left=100,top=100,width=300,height=200"
    );
  }
}

function getTotalPrice() {
  return paymentPrice;
}

function paymentSuccess(cardNo) {
  alert(`${cardNo} 로 ${paymentPrice} 원이 결제 완료되었습니다.`);
  paymentPrice = 0;
  result.innerHTML = "";
}

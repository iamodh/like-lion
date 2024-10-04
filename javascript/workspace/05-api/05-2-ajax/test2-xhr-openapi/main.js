let button = document.getElementById("button");
let table = document.getElementById("result");

button.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "get",
    "http://openapi.seoul.go.kr:8088/64676d70696f643932375161574365/json/RealtimeCityAir/1/99/",
    true
  );
  xhr.onload = function () {
    let result = xhr.responseText;
    let resultObj = JSON.parse(result);
    console.log(resultObj);
    let rows = resultObj["RealtimeCityAir"]["row"];
    let resultTxt = "";

    for (let i = 0; i < rows.length; i++) {
      let name = rows[i]["MSRSTE_NM"];
      let value = rows[i]["IDEX_MVL"];
      let grade = rows[i]["IDEX_NM"];

      resultTxt += `
        <tr>
            <td>${name}</td>
            <td>${value}</td>
            <td>${grade}</td>
        </tr>
      `;
    }
    table.innerHTML = resultTxt;
  };
  xhr.send();
});
